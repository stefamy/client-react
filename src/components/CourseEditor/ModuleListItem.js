import React from "react";
import { connect } from "react-redux";
import {
  COURSES_MODULES_API_URL,
  MODULES_API_URL
} from "../../common/constants";

const ModuleListItem = ({
  save,
  edit,
  editing,
  module,
  active,
  deleteModule,
  select,
  onTextEntry
}) => (
  <li onClick={select} className={`list-group-item ${active ? "active" : ""}`}>
    {editing && active && (
      <span>
        <input
          className="form-control"
          type="text"
          placeholder="New Module Title"
          onChange={e => {
            onTextEntry(e.target.value);
          }}
        ></input>
        <button onClick={deleteModule}>Delete</button>
        <button onClick={save}>Save</button>
      </span>
    )}
    {(!editing || !active) && (
      <span>
        {module.title}
        <button onClick={edit}>Edit</button>
      </span>
    )}
  </li>
);

const stateToPropertyMapper = state => ({});
const dispatchToPropertyMapper = dispatch => ({});

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(ModuleListItem);
