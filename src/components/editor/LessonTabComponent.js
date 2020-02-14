import React from "react";
import LessonTabItem from "./LessonTabItem";

export default class LessonTabComponent extends React.Component {
  componentDidMount() {
    this.props.findLessonsForModule(this.props.moduleId);
  }

  componentDidUpdate() {
    // this.props.findLessonsForModule(this.props.moduleId);
  }

  state = {
    activeLessonId: this.props.lessonId,
    editingLessonId: "",
    newLessonTitle: "hellooo"
  };

  render() {
    return (
      <ul className="nav nav-tabs">
        {this.props.lessons &&
          this.props.lessons.map(lesson => (
            <LessonTabItem
              key={lesson._id}
              edit={() => {
                const lessonId = lesson._id;
                this.setState({
                  editingLessonId: lesson._id,
                  newLessonTitle: lesson.title
                });
              }}
              select={() => {
                const lessonId = lesson._id;
                this.setState({
                  activeLessonId: lessonId,
                  newLessonTitle: "new title"
                });
              }}
              onTextEntry={entry => {
                this.setState({
                  newLessonTitle: "another new title"
                });
              }}
              save={() => {
                const lessonId = lesson._id;
                const moduleId = this.props.moduleId;
                const newTitle = this.state.newLessonTitle;
                this.setState({
                  editingLessonId: "",
                  activeLessonId: ""
                });
                this.props
                  .updateLesson(lessonId, {
                    title: newTitle
                  })
                  .then(() => {});
              }}
              deleteLesson={() => {
                const lessonId = lesson._id;
                const moduleId = this.props.moduleId;
                this.setState({
                  editingLessonId: "",
                  newLessonTitle: ""
                });
                this.props.deleteLesson(lessonId).then(() => {
                  console.log("deleted!");
                  // this.props.history.push(`/module/${moduleId}`);
                });
              }}
              editing={lesson._id === this.state.editingLessonId}
              active={lesson._id === this.state.activeLessonId}
              lesson={lesson}
            />
          ))}
        <li className="list-group-item">
          <button
            onClick={() => {
              const modId = this.props.moduleId;
              this.props.createLesson(modId, {
                title: "New Lesson"
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
