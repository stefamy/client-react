import React from "react";
import CourseTableRow from "./CourseTableRow";

const CourseTableComponent = ({
  courses,
  deleteCourse,
  showCourseEditor,
  toggle
}) => (
  <div>
    <div class="width-limiter">
      <h2>Course Table ({courses.length})</h2>
    </div>
    <ul class="p-0 m-auto">
      <li class="row course-row wbdv-row wbdv-course">
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
            class="grid-icon wbdv-button wbdv-grid-layout"
            onClick={toggle}
          >
            <i class="fas fa-th"></i>
          </button>
          <button class="sort-icon icon wbdv-button wbdv-sort">
            <i class="fas fa-sort-alpha-up"></i>
          </button>
        </div>
      </li>
      {courses.map(function(course, index) {
        return (
          <CourseTableRow
            showCourseEditor={showCourseEditor}
            deleteCourse={deleteCourse}
            key={course._id}
            course={course}
          />
        );
      })}
    </ul>
  </div>
);
export default CourseTableComponent;
