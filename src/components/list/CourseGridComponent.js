import React from "react";
import CourseGridCardComponent from "./CourseGridCardComponent";
import { Link } from "react-router-dom";

const CourseGridComponent = ({ courses, toggle, deleteCourse }) => (
  <div>
    <h3>Course Grid</h3>
    <button onClick={() => toggle("table")}>Toggle</button>
    <div className="row">
      {courses.map(function(course, index) {
        return (
          <CourseGridCardComponent
            key={course._id}
            deleteCourse={deleteCourse}
            course={course}
          />
        );
      })}
    </div>
  </div>
);

export default CourseGridComponent;
