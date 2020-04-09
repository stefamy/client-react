import React from "react";
import LessonTabItem from "./LessonTabItem";

export default class LessonTabComponent extends React.Component {
  componentDidMount() {
    this.props.findLessonsForModule(this.props.moduleId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.moduleId !== prevProps.moduleId) {
      this.props.findLessonsForModule(this.props.moduleId);
    }
  }


  state = {
    activeLessonId: this.props.lessonId,
    editingLessonId: "",
    newLessonTitle: "hellooo"
  };


  render() {
    return (
        <div>

      <ul className="nav nav-tabs">
        {this.props.lessons &&
          this.props.lessons.map(lesson => (
            <LessonTabItem
              key={lesson._id}
              edit={() => {
                const lessonId = lesson._id;
                this.props.history.push(
                    `/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lessonId}`
                );
                this.setState({
                  editingLessonId: lesson._id,
                  newLessonTitle: lesson.title
                });
              }}
              select={() => {
                const lessonId = lesson._id;
                this.setState({
                  activeLessonId: lessonId,
                  newLessonTitle: lesson.title
                });
                this.props.history.push(
                    `/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lessonId}`
                );

              }}
              onTextEntry={entry => {
                this.setState({
                  newLessonTitle: entry
                });
              }}
              save={() => {
                const lessonId = lesson._id;
                const newTitle = this.state.newLessonTitle;
                this.setState({
                  editingLessonId: "",
                  activeLessonId: ""
                });
                this.props
                  .updateLesson(lessonId, {
                    title: newTitle
                  })
                  .then(() => {
                    this.props.findLessonsForModule(this.props.moduleId);
                  });
              }}
              deleteLesson={() => {
                const lessonId = lesson._id;
                this.setState({
                  editingLessonId: "",
                  newLessonTitle: ""
                });
                this.props.deleteLesson(lessonId).then(() => {
                  this.props.findLessonsForModule(this.props.moduleId);
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
                title: "New Lesson "
              });

            }}
          >
            Add
          </button>
        </li>
      </ul>

      </div>
  );
  }
}
