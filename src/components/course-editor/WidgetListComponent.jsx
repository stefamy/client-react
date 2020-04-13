import React, { Component } from "react";
import WidgetListItemComponent from "./WidgetListItemComponent";
import widgetsService from "../../services/WidgetService";
import widgetActions from "../../actions/WidgetActions";
import {connect} from "react-redux";

class WidgetListComponent extends Component {

  state = {
    newWidgets: [],
    updatedWidgets: [],
    deletedWidgetIds: [],
    tempId: 'A'
  };

  resetState() {
    this.setState({
      newWidgets: [],
      updatedWidgets: [],
      deletedWidgetIds: [],
      isSaving: false,
      tempId: 'A'
    })
  }

  componentDidMount() {
    this.props.findWidgetsForTopic(this.props.selectedTopicID);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedTopicID !== this.props.selectedTopicID) {
      this.props.findWidgetsForTopic(this.props.selectedTopicID);
    }
  }


  handleNewWidget = (widget) => {
    this.props.createWidget(widget);

    // Store them in a separate array to add to DB later, on save:
    const newWidgetsArr = [...this.state.newWidgets, widget];
    this.setState({newWidgets: newWidgetsArr});
  }

  handleUpdateWidget = (widget, removeOld) => {
    if (widget.isNew) {
      const newWidgetsArr = this.state.newWidgets.map(w => (w.id === widget.id) ? widget : w);
      this.setState({newWidgets: [...newWidgetsArr]});
      console.log('updated new widget:', this.state);
    }
    else {
      let updatedWidgetsArr = this.state.updatedWidgets.length > 0 ? [...this.state.updatedWidgets] : [];
      updatedWidgetsArr = removeOld ? updatedWidgetsArr.filter(w => w.id !== widget.id) : updatedWidgetsArr;
      updatedWidgetsArr.push(widget);
      this.setState({updatedWidgets: [...updatedWidgetsArr]});
    }
  }


  handleRemoveWidget = (widget) => {
    if (!widget.isNew) {
      this.props.deleteWidget(widget.id);

      // Store them in a separate array to add to DB later, on save:
      const deletedWidgetIdArr = [...this.state.deletedWidgetIds, widget.id];
      this.setState({deletedWidgetIds: deletedWidgetIdArr});
    }
    else {
      this.props.deleteWidget(widget.id);

      // Remove them from stored state arrays so they're not added to DB on save:
      const newWidgetsArr = this.state.newWidgets.filter(w => w.id !== widget.id);
      const updatedWidgetsArr = this.state.updatedWidgets.filter(w => w.id !== widget.id);

      this.setState({
        newWidgets: newWidgetsArr,
        updatedWidgets: updatedWidgetsArr
      });
    }

  }

  addNewWidget = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const widget = {
      id: this.state.tempId,
      type: 'HEADING',
      size: 1,
      isNew: true
    };

    this.setState({tempId: widget.id += '0'});
    this.handleNewWidget(widget);
  }


  saveWidgets = () => {
    this.setState({isSaving: true});
    this.saveAllNewWidgets(this.props.selectedTopicID, this.state.newWidgets)
    .then(() => this.saveAllUpdatedWidgets(this.state.updatedWidgets))
    .then(() => this.saveAllDeletedWidgets(this.state.deletedWidgetIds))
    .then(() => this.resetState());
  };

  saveAllNewWidgets (topicId, newWidgets)  {
    return Promise.all(newWidgets.map(async widget => {
      await widgetsService.createWidget(topicId, widget);
    }));
  }

  saveAllUpdatedWidgets (updatedWidgets)  {
    return Promise.all(updatedWidgets.map(async widget => {
      await widgetsService.updateWidget(widget.id, widget);
    }));
  }

  saveAllDeletedWidgets (deletedWidgetIds)  {
    return Promise.all(deletedWidgetIds.map(async widgetId => {
      await widgetsService.deleteWidget(widgetId);
    }));
  }


  render() {
    return (
        <>
        <div className="row flex-grow-1">
        <div className="col-12">
          {this.props.widgets && this.props.widgets.length > 0 && !this.state.isSaving &&
          <div className="mb-3 text-right">
           <button className="btn btn-success" onClick={() => this.saveWidgets(this.props)}>Save</button>
          </div>
          }
          {this.state.isSaving &&
          <div className="mb-3 text-right">
            <button className="btn btn-warning disabled">Saving...</button>
          </div>
          }
          <div id="widget-list" className="widget-list d-flex flex-column">
          {this.props.widgets &&
            this.props.widgets.map((widget, index) => (
                <WidgetListItemComponent
                key={index}
                widget={widget}
                removeWidget={this.handleRemoveWidget}
                updateWidget={this.handleUpdateWidget}
            />
            ))}
        </div>
        </div>
        <div className="col-12 text-right mb-3">
          <button onClick={(e) => this.addNewWidget(e)} className="btn-primary btn-new-widget btn-lg">
            <i className="fa fa-plus"  ></i>
          </button>
        </div>
      </div>
      </>
  );
  }
}

const stateToPropertyMapper = state => {
  return {
    widgets: state.widgets.widgets
  };
};

const dispatchToPropertyMapper = dispatch => {
  return {
    findWidgetsForTopic: topicId => {
      widgetsService.findWidgetsForTopic(topicId).then(widgets => {
        dispatch(widgetActions.findAllWidgets(widgets));
      });
    },

    createWidget: widget => {
      dispatch(widgetActions.createWidget(widget));
    },

    deleteWidget: widgetId => {
      dispatch(widgetActions.deleteWidget(widgetId));
    }
  };
};

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(WidgetListComponent);
