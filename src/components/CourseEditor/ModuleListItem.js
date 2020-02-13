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
  select
}) => (
  <li onClick={select} className={`list-group-item ${active ? "active" : ""}`}>
    {module.title}
    {editing && (
      <span>
        <button onClick={deleteModule}>Delete</button>
        <button onClick={save}>Save</button>
      </span>
    )}
    {!editing && <button onClick={edit}>Edit</button>}
  </li>
);

const stateToPropertyMapper = state => ({});
const dispatchToPropertyMapper = dispatch => ({});

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(ModuleListItem);
