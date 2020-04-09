import React from "react";
import { connect } from "react-redux";

const WidgetTabItem = ({
  save,
  edit,
  editing,
  widget,
  active,
  deleteWidget,
  select,
  onTextEntry
}) => (
    <li onClick={select} className={`nav-item list-group-item ${active ? "active" : ""}`}>
    <span>
      {editing && active && (
          <span>
          <input
              className="form-control"
              type="text"
              placeholder="New Widget Title"
              onChange={e => {
                onTextEntry(e.target.value);
              }}
          ></input>
          <button onClick={deleteWidget}>Delete</button>
          <button onClick={save}>Save</button>
        </span>
      )}
      {(!editing || !active) && (
          <span>
          {widget.title}
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
)(WidgetTabItem);
