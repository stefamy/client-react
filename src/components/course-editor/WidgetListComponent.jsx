import React, { Component } from "react";
import WidgetListItemComponent from "./WidgetListItemComponent";
import widgetsService from "../../services/WidgetService";
import widgetActions from "../../actions/WidgetActions";
import {connect, Provider} from "react-redux";

class WidgetListComponent extends Component {
  state = {
    newWidgets: [],
    updatedWidgets: [],
    deletedWidgetIds: []
  };

  resetState() {
    this.setState({
      newWidgets: [],
      updatedWidgets: [],
      deletedWidgetIds: []
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

  addNewWidget = () => {
    const lastWidget = this.props.widgets && this.props.widgets.length > 0 ? this.props.widgets[this.props.widgets.length - 1] : null;

    const id = lastWidget ? lastWidget.id + 1 : 0; // TODO: id creation for multiple changes within session
    const orderWidget = lastWidget ? lastWidget.orderWidget + 1 : 0;

    const widget = {
      id: id, // Increment
      orderWidget: orderWidget, // Increment
      type: 'HEADING', // Default
      size: 1 // Default
    };

    this.handleNewWidget(widget);
  };

  saveWidgets = () => {
    this.state.newWidgets.forEach(widget => widgetsService.createWidget(this.props.selectedTopicID, widget));
    this.state.updatedWidgets.forEach(widget => widgetsService.updateWidget(widget.id, widget))
    this.state.deletedWidgetIds.forEach(id => widgetsService.deleteWidget(id));
    this.resetState();
  };

  handleNewWidget = (widget) => {
    this.props.createWidget(widget);
    const newWidgetsArr = [...this.state.newWidgets, widget];
    this.setState({newWidgets: newWidgetsArr});
  }

  handleUpdateWidget = (widget, removeOld) => {
    let updatedWidgetsArr = this.state.updatedWidgets.length > 0 ? [...this.state.updatedWidgets] : [];

    if (removeOld) {
      updatedWidgetsArr = updatedWidgetsArr.filter(w => w.id !== widget.id);
    }

    updatedWidgetsArr.push(widget);
    this.setState({updatedWidgets: [...updatedWidgetsArr]});
  }


  handleRemoveWidget = (id) => {
    this.props.removeWidget(id);
    const deletedWidgetIdArr = [...this.state.deletedWidgetIds, id];
    this.setState({deletedWidgetIds: deletedWidgetIdArr});
  }

  render() {
    return (
      <div className="row flex-grow-1">
        <div className="col-12">
          {this.props.widgets &&
          <div className="mb-3 text-right">
           <button className="btn btn-success" onClick={() => this.saveWidgets(this.props)}>Save</button>
          </div>
          }
          <div className="widget-list d-flex flex-column">
          {this.props.widgets &&
            this.props.widgets.map((widget, index) => (
                <WidgetListItemComponent
                key={index}
                widgetID={widget.id}
                widget={widget}
                removeWidget={() => this.handleRemoveWidget(widget.id)}
                updateWidget={this.handleUpdateWidget}
            />
            ))}
        </div>
        </div>
        <div className="col-12 text-right">
          <button className="btn-danger btn-lg fab">
            <i className="fa fa-plus"
               onClick={() => this.addNewWidget()}
            ></i>
          </button>
        </div>
      </div>
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

    createWidget: (widget) => {
        dispatch(widgetActions.createWidget(widget));
    },

    deleteWidget: widgetID => {
      widgetsService.deleteWidget(widgetID).then(() => {
      });
    },

    updateWidget: widget => {
      widgetsService.updateWidget(widget.id, widget).then(() => {
      });
    },

    removeWidget: widgetID => {
      dispatch(widgetActions.deleteWidget(widgetID));
    }

  };
};

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(WidgetListComponent);
