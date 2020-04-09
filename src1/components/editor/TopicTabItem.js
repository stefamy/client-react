import React from "react";
import { connect } from "react-redux";

const TopicTabItem = ({
  save,
  edit,
  editing,
  topic,
  active,
  deleteTopic,
  select,
  onTextEntry
}) => (
    <li onClick={select} className={`nav-item  list-group-item ${active ? "active" : ""}`}>
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
          <button onClick={deleteTopic}>Delete</button>
          <button onClick={save}>Save</button>
        </span>
      )}
      {(!editing || !active) && (
          <span>
          {topic.title}
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
)(TopicTabItem);
