import React from "react";

const CourseManagerHeading = ({ updateForm, newCourseTitle, addCourse }) => (
  <div class="course-manager-heading">
    <div class="width-limiter align-items-center row">
      <div class="col-1 text-center p-0">
        <div class="navbar navbar-light p-0">
          <button
            class="navbar-toggler m-0 p-0"
            type="button"
            data-toggle="collapse"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="wbdv-field wbdv-hamburger navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      <div class="col-2 pl-0 hide-mobile">
        <h1 class="page-title wbdv-label wbdv-course-manager m-0">
          Course Manager
        </h1>
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          onChange={updateForm}
          value={newCourseTitle}
        />
      </div>
      <div class="col-1">
        <button
          type="button"
          class="btn-plus wbdv-button text-align-left wbdv-add-course"
          onClick={addCourse}
        >
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  </div>
);

export default CourseManagerHeading;
