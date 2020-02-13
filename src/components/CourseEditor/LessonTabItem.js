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
);

const stateToPropertyMapper = state => ({});
const dispatchToPropertyMapper = dispatch => ({});

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(LessonTabItem);
