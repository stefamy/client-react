import React from "react";
import CourseGridCard from "../components/CourseGridCard";
import "../css/CourseGrid.css";

const CourseGridComponent = ({
  courses,
  deleteCourse,
  showCourseEditor,
  toggle
}) => (
  <div class="container-content">
    <div class="m-auto">
      <div class="row align-items-center course-grid-title-row">
        <div class="col-xl-6 col-lg-3 col-2 hide-mobile course-title-heading wbdv-row wbdv-title">
          <span class="title">Recent documents</span>
        </div>
        <div class="col-xl-4 col-lg-5 col-5 hide-mobile course-owner text-center wbdv-header wbdv-owner">
          <span class="gray detail inactive">
            Owned by me <i className="inactive fa fa-caret-down"></i>
          </span>
        </div>
        <div class="col-xl-2 col-lg-4 col-12 course-grid text-center">
          <div class="row">
            <div class="col">
              <button
                class="list-icon wbdv-button wbdv-list-layout"
                onClick={toggle}
              >
                <i className="fa fa-list"></i>
              </button>
            </div>
            <div class="col">
              <button class="inactive sort-icon icon wbdv-button wbdv-sort">
                <i className="fa fa-sort-alpha-asc"></i>
              </button>
            </div>
            <div class="col">
              <button class="inactive folder-icon icon wbdv-button wbdv-folder">
                <i className="fa fa-folder"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row course-grid">
        {courses.map(function(course, index) {
          return (
            <CourseGridCard
              showCourseEditor={showCourseEditor}
              deleteCourse={deleteCourse}
              key={course._id}
              course={course}
            />
          );
        })}
      </div>
    </div>
  </div>
);
export default CourseGridComponent;
