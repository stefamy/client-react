import React, { Component } from "react";
import WidgetListItemComponent from "./WidgetListItemComponent";
import widgetsService from "../../services/WidgetService";
import widgetActions from "../../actions/WidgetActions";
import { connect } from "react-redux";

class WidgetListComponent extends Component {
  state = {
    showAddWidgetInput: false,
    newWidgetName: ""
  };

  componentDidMount() {
    this.props.findWidgetsForTopic(this.props.selectedTopicID);

  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedTopicID !== this.props.selectedTopicID) {
      this.props.findWidgetsForTopic(this.props.selectedTopicID);
    }
  }

  handleWidgetNameChange = e => {
    this.setState({ newWidgetName: e.target.value });
  };

  submitNewWidget = () => {
    const widgetToCreate = {
      name: this.state.newWidgetName
    };

    this.props.createWidget(this.props.selectedTopicID, widgetToCreate);
    this.setState({ showAddWidgetInput: false });
  };

  render() {
    return (
      <div className="row">
        <div className="mt-3 flex-div">
          {this.props.widgets &&
            this.props.widgets.map(widget => (
                <WidgetListItemComponent
                key={widget.id}
                widgetID={widget.id}
                widget={widget}
                history={this.props.history}
                courseId={this.props.courseId}
                selectedModuleID={this.props.selectedModuleID}
                selectedLessonID={this.props.selectedLessonID}
                selectedTopicID={this.props.selectedTopicID}
                selectedWidgetID={this.props.selectedWidgetID}
            />
            ))}
          {!this.state.showAddWidgetInput && (
            <i
              className="fa fa-2x fa-plus pointer align-middle ml-3"
              onClick={() => this.setState({ showAddWidgetInput: true })}
            ></i>
          )}
        </div>
        {this.state.showAddWidgetInput && (
          <div className="row mt-3">
            <div className="col-8 col-md-6">
              <input
                type="text"
                placeholder="New Widget Name"
                className="form-control ml-3"
                onChange={this.handleWidgetNameChange}
              />
            </div>
            <div className="col-4">
              <button className="btn btn-sm" onClick={this.submitNewWidget}>
                <i className="fa fa-2x fa-check text-success"></i>
              </button>
              <button
                className="btn btn-sm"
                onClick={() => this.setState({ showAddWidgetInput: false })}
              >
                <i className="fa fa-2x fa-times text-danger"></i>
              </button>
            </div>
          </div>
        )}
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

    createWidget: (topicId, widget) => {
      widgetsService.createWidget(topicId, widget).then(newWidget => {
        dispatch(widgetActions.createWidget(newWidget));
      });
    }
  };
};

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(WidgetListComponent);
