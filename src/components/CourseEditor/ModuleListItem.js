import React from "react";

const ModuleListItem = ({ module }) => (
  <li class="module-tab nav-item wbdv-module-item">
    <a href="#">
      <span class="module-name wbdv-module-item-title">{module.title}</span>
      <button type="button" class="wbdv-module-item-delete-btn delete-button">
        <i className="fa fa-times"></i>
      </button>
    </a>
  </li>
);
export default ModuleListItem;
