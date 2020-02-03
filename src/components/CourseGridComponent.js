import React from "react";
import CourseGridCell from "./CourseGridCell";

const CourseGridComponent = ({ courses, deleteCourse, showCourseEditor }) => (
  <div>
    <h2>Course Grid {courses.length}</h2>
    <ul>
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
    </ul>
  </div>
);
export default CourseGridComponent;
