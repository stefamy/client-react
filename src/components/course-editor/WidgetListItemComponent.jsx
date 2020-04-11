import React, { Component } from "react";
import widgetsService from "../../services/WidgetService";
import widgetActions from "../../actions/WidgetActions";
import { connect } from "react-redux";

class WidgetListItemComponent extends Component {
  state = {
    isSelected: false,
    isEditEnabled: false,
    newWidgetName: ""
  };

  componentDidMount() {
    this.setState({
      isSelected: this.props.widget.id === parseInt(this.props.selectedWidgetID)
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isSelected !== this.state.isSelected) {
      this.setState({ isEditEnabled: false });
    }

    if (
      this.state.isSelected !==
      (this.props.widget.id === parseInt(this.props.selectedWidgetID))
    ) {
      this.setState({
        isSelected: this.props.widget.id === parseInt(this.props.selectedWidgetID)
      });
    }
  }

  setSelectedIdToRoute = () => {
    this.props.history.push(
      `/course-editor/${this.props.courseId}/module/${this.props.selectedModuleID}/lesson/${this.props.selectedLessonID}/topic/${this.props.selectedTopicID}/widget/${this.props.widget.id}`
    );
  };

  deleteWidgetClicked = e => {
    e.stopPropagation();
    this.props.deleteWidget(this.props.widget.id);
    if (this.props.widget.id === parseInt(this.props.selectedWidgetID)) {
      this.props.history.push(
        `/course-editor/${this.props.courseId}/module/${this.props.selectedModuleID}/lesson/${this.props.selectedLessonID}/topic/${this.props.selectedTopicID}`
      );
    }
  };

  updateWidgetClicked = e => {
    e.stopPropagation();
    const widget = { ...this.props.widget };
    widget.name = this.state.newWidgetName;
    this.props.updateWidget(widget);
    this.setState({ isEditEnabled: false });
  };

  enableEditMode = e => {
    e.stopPropagation();
    this.setState({ isEditEnabled: true });
  };

  handleNameChange = e => {
    this.setState({ newWidgetName: e.target.value });
  };

  render() {
    return (
      <>
        {!this.state.isEditEnabled && (
          <button
            className={`btn mx-2 ${
              this.state.isSelected ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={this.setSelectedIdToRoute}
          >
            <span className="mx-1">{this.props.widget.name}</span>
            {this.state.isSelected && (
              <>
                <i
                  className="fa fa-pencil text-info mx-1"
                  onClick={this.enableEditMode}
                ></i>
                <i
                  className="fa fa-trash text-danger mx-1"
                  onClick={this.deleteWidgetClicked}
                ></i>
              </>
            )}
          </button>
        )}
        {this.state.isEditEnabled && (
          <div className="row my-2">
            <div className="col-6">
              <input
                type="text"
                placeholder="New Widget Name"
                className="form-control ml-3"
                onChange={this.handleNameChange}
              />
            </div>
            <div className="col-6">
              <button className="btn btn-sm" onClick={this.updateWidgetClicked}>
                <i className="fa fa-2x fa-check text-success"></i>
              </button>
              <button
                className="btn btn-sm"
                onClick={() => this.setState({ isEditEnabled: false })}
              >
                <i className="fa fa-2x fa-times text-danger"></i>
              </button>
            </div>
          </div>
        )}
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
    deleteWidget: widgetID => {
      widgetsService.deleteWidget(widgetID).then(() => {
        dispatch(widgetActions.deleteWidget(widgetID));
      });
    },

    updateWidget: widget => {
      widgetsService.updateWidget(widget.id, widget).then(() => {
        dispatch(widgetActions.updateWidget(widget));
      });
    }
  };
};

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(WidgetListItemComponent);
