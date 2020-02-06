import React from "react";
import ModuleList from "./ModuleList";
import StaticModuleContent from "./StaticModuleContent";
import "../../css/CourseEditor.css";

const CourseEditor = ({ hideCourseEditor }) => (
  <div class="course-editor-content">
    <div class="nav-container navbar-dark navbar bg-dark">
      <nav class="nav sticky-top sticky-top navbar-expand-lg justify-content-between">
        <a
          class="nav-link navbar-brand wbdv-course-editor wbdv-close"
          href="/course-manager/course-manager.template.client.html"
        >
          <button onClick={hideCourseEditor}>
            <i className="fa fa-times"></i>
          </button>
        </a>
        <span class="navbar-brand wbdv-course-title">CS5610 - WebDev</span>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav justify-content-between">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Build
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link wbdv-page-tab" href="#">
                Pages
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Theme
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Store
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Apps
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Settings
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link wbdv-new-page-btn" href="#">
                <i className="fa fa-plus"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="row course-editor-content-wrap">
      <div className="col-md-4 col-12 sidebar-left sidebar-menu">
        <ModuleList
          modules={[
            { _id: "123", title: "CSS" },
            { _id: "234", title: "HTML" },
            { _id: "345", title: "React JS" }
          ]}
        />
      </div>
      <StaticModuleContent />
    </div>
  </div>
);

export default CourseEditor;
