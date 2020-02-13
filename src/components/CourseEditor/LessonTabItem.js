import React from "react";
import { connect } from "react-redux";
import {
  COURSES_MODULES_API_URL,
  MODULES_API_URL
} from "../../common/constants";

const LessonTabItem = ({
  save,
  edit,
  editing,
  lesson,
  active,
  deleteLesson,
  select,
  onTextEntry
}) => (
  <li onClick={select} className={`nav-item ${active ? "active" : ""}`}>
    <span>
      {"active:" + active + "lesson:" + lesson._id}
      {editing && active && (
        <span>
          <input
            className="form-control"
            type="text"
            placeholder="New Topic Title"
            onChange={e => {
              onTextEntry(e.target.value);
            }}
          ></input>
          <button onClick={deleteLesson}>Delete</button>
          <button onClick={save}>Save</button>
        </span>
      )}
      {(!editing || !active) && (
        <span>
          {lesson.title}
          <button onClick={edit}>Edit</button>
        </span>
      )}
    </span>
  </li>

  //     <li
  //     className={`nav-item`}
  //     onClick={() =>
  //       this.setState({
  //         selectedLessonId: lesson._id
  //       })
  //     }
  //     key={lesson._id}
  //   >
  //     <a
  //       className={`nav-link
  //                                   ${
  //                                     this.state.editingLessonId ===
  //                                       lesson._id ||
  //                                     this.state.selectedLessonId ===
  //                                       lesson._id
  //                                       ? "active"
  //                                       : ""
  //                                   }`}
  //     >
  //       {this.state.editingLessonId !== lesson._id && (
  //         <span>{lesson.title}</span>
  //       )}
  //       {this.state.editingLessonId === lesson._id && (
  //         <input
  //           onChange={e => {
  //             const newTitle = e.target.value;
  //             this.setState(prevState => ({
  //               lesson: {
  //                 ...prevState.lesson,
  //                 title: newTitle
  //               }
  //             }));
  //           }}
  //           value={this.state.lesson.title}
  //         />
  //       )}
  //       <button
  //         onClick={() => {
  //           this.props.updateLesson(this.state.lesson).then(() =>
  //             this.setState({
  //               editingLessonId: ""
  //             })
  //           );
  //         }}
  //       >
  //         Save
  //       </button>
  //       <button onClick={() => this.props.deleteLesson(lesson._id)}>
  //         X
  //       </button>
  //       <button
  //         onClick={() => {
  //           this.setState({
  //             lesson: lesson,
  //             editingLessonId: lesson._id
  //           });
  //         }}
  //       >
  //         Edit
  //       </button>
  //     </a>
  //   </li>
  //   ))}
  //   <li className="nav-item">
  //   <button onClick={() => this.props.addLesson(this.props.moduleId)}>
  //   +
  //   </button>
  //   </li>
  //     <li onClick={select} className={`list-group-item ${active ? "active" : ""}`}>
  //       {editing && active && (
  //         <span>
  //           <input
  //             className="form-control"
  //             type="text"
  //             placeholder="New Title"
  //             onChange={e => {
  //               onTextEntry(e.target.value);
  //             }}
  //           ></input>
  //           <button onClick={deleteModule}>Delete</button>
  //           <button onClick={save}>Save</button>
  //         </span>
  //       )}
  //       {(!editing || !active) && (
  //         <span>
  //           {module.title}
  //           <button onClick={edit}>Edit</button>
  //         </span>
  //   )}
  // </li>
);

const stateToPropertyMapper = state => ({});
const dispatchToPropertyMapper = dispatch => ({});

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(LessonTabItem);
