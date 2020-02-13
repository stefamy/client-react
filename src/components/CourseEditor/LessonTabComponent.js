import React from "react";
import LessonTabItem from "./LessonTabItem";

export default class LessonTabComponent extends React.Component {
  componentDidMount() {
    this.props.findLessonsForModule(this.props.moduleId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // if (this.props.moduleId !== prevProps.moduleId) {
    this.props.findLessonsForModule(this.props.moduleId);
    // }
  }

  state = {
    activeLessonId: "",
    editingLessonId: "",
    newLessonTitle: "hellooo",
    lesson: {
      title: "",
      _id: ""
    }
  };

  render() {
    console.log("this state:", this.state);
    console.log("this props:", this.props);

    return (
      <ul className="nav nav-tabs">
        {this.props.lessons &&
          this.props.lessons.map(lesson => (
            <LessonTabItem
              key={lesson._id}
              edit={() => {
                // const lessonId = lesson._id;
                // this.props.history.push(
                //   `/course/${this.props.moduleId}/module/${lessonId}`
                // );
                this.setState({
                  editingLessonId: lesson._id,
                  newLessonTitle: "hi"
                });
              }}
              select={() => {
                const lessonId = lesson._id;
                // this.props.history.push(
                //   `/course/${this.props.lessonId}/lesson/${lessonId}`
                // );
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
                this.props.updateLesson(lessonId, {
                  title: newTitle
                });
                //   .then(() => {
                //     this.props.history.push(
                //       `/lesson/${lessonId}/module/${moduleId}`
                //     );
                //   });
              }}
              deleteLesson={() => {
                const lessonId = module._id;
                const moduleId = this.props.moduleId;
                this.setState({
                  editingLessonId: "",
                  newLessonTitle: ""
                });
                this.props.deleteLesson(lessonId).then(() => {
                  console.log("deleted!");
                  this.props.history.push(`/module/${moduleId}`);
                });
              }}
              editing={lesson._id === this.state.editingLessonId}
              active={lesson._id === this.state.activeLessonId}
              lesson={lesson}
            />
          ))}
        <li className="list-group-item">
          <button
            onClick={() =>
              this.props.createLesson(this.props.moduleId, {
                title: "New Lesson"
              })
            }
          >
            Add
          </button>
        </li>
      </ul>
    );
  }
}

// const stateToPropertyMapper = state => ({
//   lessons: state.lessons.lessons
// });

// const dispatcherToPropertyMapper = dispatcher => ({
//   findLessonsForModule: moduleId =>
//     fetch(MODULES_LESSONS_API_URL(moduleId))
//       .then(response => response.json())
//       .then(lessons =>
//         dispatcher({
//           type: FIND_LESSONS_FOR_MODULE,
//           lessons: lessons
//         })
//       ),
//   updateLesson: async lesson => {
//     const actualLesson = await updateLesson(lesson);
//     dispatcher({
//       type: UPDATE_LESSON,
//       lesson: actualLesson,
//       lessonId: actualLesson._id
//     });
//   },
//   addLesson: moduleId =>
//     fetch(MODULES_LESSONS_API_URL(moduleId), {
//       method: "POST",
//       body: JSON.stringify({ title: "New Lesson" }),
//       headers: {
//         "content-type": "application/json"
//       }
//     })
//       .then(response => response.json())
//       .then(actualLesson =>
//         dispatcher({
//           type: "CREATE_LESSON",
//           lesson: actualLesson
//         })
//       ),
//   deleteLesson: lessonId =>
//     fetch(`${LESSONS_API_URL}/${lessonId}`, {
//       method: "DELETE"
//     })
//       .then(response => response.json())
//       .then(status =>
//         dispatcher({
//           type: "DELETE_LESSON",
//           lessonId: lessonId
//         })
//       ),
//   findAllLessons: () =>
//     fetch(LESSONS_API_URL)
//       .then(response => response.json())
//       .then(lessons =>
//         dispatcher({
//           type: "FIND_ALL_LESSONS",
//           lessons: lessons
//         })
//       )
// });

// export default connect(
//   stateToPropertyMapper,
//   dispatcherToPropertyMapper
// )(LessonTabComponent);
// export default LessonTabComponent;
