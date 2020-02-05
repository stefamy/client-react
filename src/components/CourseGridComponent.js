import React from "react";
import CourseGridCell from "./CourseGridCard";

const CourseGridComponent = ({
  courses,
  deleteCourse,
  showCourseEditor,
  toggle
}) => (
  <div class="container-content">
    <div class="p-0 m-auto">
      <div class="row course-row wbdv-row wbdv-course">
        <div class="col-lg-6 col course-title-heading wbdv-row wbdv-title">
          <span class="title">Title</span>
        </div>
        <div class="col-lg-2 course-owner text-center hide-mobile-heading hide-mobile wbdv-header wbdv-owner">
          <span class="gray detail">Owned by</span>
        </div>
        <div class="col-lg-2 course-modified-heading text-center hide-mobile wbdv-header wbdv-last-modified">
          <span class="gray detail">Last modified by me</span>
        </div>
        <div class="col-lg-2 course-grid text-center">
          <button
            class="list-icon wbdv-button wbdv-list-layout"
            onClick={toggle}
          >
            <i class="fas fa-list"></i>
          </button>
          <button class="sort-icon icon wbdv-button wbdv-sort">
            <i class="fas fa-sort-alpha-up"></i>
          </button>
        </div>
      </div>
      <div class="row course-grid">
        {courses.map(function(course, index) {
          return (
            <CourseGridCell
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
