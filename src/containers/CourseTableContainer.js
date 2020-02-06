import React from "react";
import CourseTableRow from "../components/CourseTableRow";
import "../css/CourseTable.css";

const CourseTableComponent = ({
  courses,
  deleteCourse,
  showCourseEditor,
  toggle
}) => (
  <div class="container-content">
    <div class="p-0 m-auto">
      <div class="row course-row course-table-heading">
        <div class="col-lg-6 col-10 course-title-heading wbdv-row wbdv-title">
          <span class="title">Title</span>
        </div>
        <div class="col-lg-2 course-owner text-center hide-mobile-heading hide-mobile wbdv-header wbdv-owner">
          <span class="gray detail">Owned by</span>
        </div>
        <div class="col-lg-2 course-modified-heading text-center hide-mobile wbdv-header wbdv-last-modified">
          <span class="gray detail">Last modified by me</span>
        </div>
        <div class="col-2 icon-course-grid text-center">
          <button
            class="grid-icon wbdv-button wbdv-grid-layout"
            onClick={toggle}
          >
            <i className="fa fa-th"></i>
          </button>
          <button class="sort-icon icon wbdv-button wbdv-sort">
            <i className="fa fa-sort-alpha-up"></i>
          </button>
        </div>
      </div>
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
    </div>
  </div>
);
export default CourseTableComponent;