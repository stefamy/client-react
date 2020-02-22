import React from "react";
import WidgetListItem from "./WidgetListItem";

export default class WidgetListComponent extends React.Component {
  componentDidMount() {
    this.props.findAllWidgetsForTopic(this.props.topicId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.topicId !== prevProps.topicId) {
      this.props.findAllWidgetsForTopic(this.props.topicId);
    }
  }


  state = {
    activeWidgetId: this.props.widgetId,
    editingWidgetId: "",
    newWidgetTitle: "hellooo"
  };

  render() {
    return (
        <ul className="nav nav-tabs">
          {this.props.widgets &&
          this.props.widgets.map(widget => (
              <WidgetListItem
                  key={widget._id}
                  edit={() => {
                    this.setState({
                      editingWidgetId: widget._id,
                      newWidgetTitle: widget.title
                    });
                  }}
                  select={() => {
                    const widgetId = widget._id;
                    this.setState({
                      activeWidgetId: widgetId,
                      newWidgetTitle: widget.title
                    });
                  }}
                  onTextEntry={entry => {
                    this.setState({
                      newWidgetTitle: entry
                    });
                  }}
                  save={() => {
                    const widgetId = widget._id;
                    const newTitle = this.state.newWidgetTitle;
                    this.setState({
                      editingWidgetId: "",
                      activeWidgetId: ""
                    });
                    this.props
                    .updateWidget(widgetId, {
                      title: newTitle
                    })
                    .then(() => {
                      this.props.findAllWidgetsForTopic(this.props.topicId);
                    });
                  }}
                  deleteWidget={() => {
                    const widgetId = widget._id;
                    this.setState({
                      editingWidgetId: "",
                      newWidgetTitle: ""
                    });
                    this.props.deleteWidget(widgetId).then(() => {
                      this.props.findAllWidgetsForTopic(this.props.topicId);
                    });
                  }}
                  editing={widget._id === this.state.editingWidgetId}
                  active={widget._id === this.state.activeWidgetId}
                  widget={widget}
              />
          ))}
          <li className="list-group-item">
            <button
                onClick={() => {
                  const topicId = this.props.topicId;
                  this.props.createWidget(topicId, {
                    title: "New Widget "
                  });

                }}
            >
              Add
            </button>
          </li>
        </ul>
    );
  }
}
