import React from "react";
import WidgetListItem from "./WidgetListItem";
import makeId from '../../common/helpers';

export default class WidgetListComponent extends React.Component {
  componentDidMount() {
    this.props.findAllWidgets();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.topicId !== prevProps.topicId) {
      this.props.findAllWidgets();
    }
  }


  state = {
    activeWidgetId: '',
    editingWidgetId: "",
    newWidgetTitle: "New Widget Added!"
  };

  render() {
    return (
        <ul className="nav nav-tabs">
          {this.props.widgets &&
          this.props.widgets.map(widget => (
              <WidgetListItem
                  key={makeId(10)}
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
                    title: "New Widget"
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
