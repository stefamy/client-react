import React from "react";
import TopicTabItem from "./TopicTabItem";

export default class TopicTabComponent extends React.Component {
  componentDidMount() {
    this.props.findTopicsForLesson(this.props.lessonId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.lessonId !== prevProps.lessonId) {
      this.props.findTopicsForLesson(this.props.lessonId);
    }
  }


  state = {
    activeTopicId: this.props.topicId,
    editingTopicId: "",
    newTopicTitle: "hellooo"
  };

  render() {
    return (
        <ul className="nav nav-tabs">
          {this.props.topics &&
          this.props.topics.map(topic => (
              <TopicTabItem
                  key={topic._id}
                  edit={() => {
                    const topicId = topic._id;
                    this.props.history.push(
                        `/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topicId}`
                    );
                    this.setState({
                      editingTopicId: topic._id,
                      newTopicTitle: topic.title
                    });
                  }}
                  select={() => {
                    const topicId = topic._id;
                    this.setState({
                      activeTopicId: topicId,
                      newTopicTitle: topic.title
                    });
                    this.props.history.push(
                        `/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topicId}`
                    );
                  }}
                  onTextEntry={entry => {
                    this.setState({
                      newTopicTitle: entry
                    });
                  }}
                  save={() => {
                    const topicId = topic._id;
                    const newTitle = this.state.newTopicTitle;
                    this.setState({
                      editingTopicId: "",
                      activeTopicId: ""
                    });
                    this.props
                    .updateTopic(topicId, {
                      title: newTitle
                    })
                    .then(() => {
                      this.props.findTopicsForLesson(this.props.lessonId);
                    });
                  }}
                  deleteTopic={() => {
                    const topicId = topic._id;
                    this.setState({
                      editingTopicId: "",
                      newTopicTitle: ""
                    });
                    this.props.deleteTopic(topicId).then(() => {
                      this.props.findTopicsForLesson(this.props.lessonId);
                    });
                  }}
                  editing={topic._id === this.state.editingTopicId}
                  active={topic._id === this.state.activeTopicId}
                  topic={topic}
              />
          ))}
          <li className="list-group-item">
            <button
                onClick={() => {
                  const lessonId = this.props.lessonId;
                  this.props.createTopic(lessonId, {
                    title: "New Topic "
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
