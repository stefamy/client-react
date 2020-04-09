import React from "react";
import CourseGridCardComponent from "./CourseGridCardComponent";
import { Link } from "react-router-dom";

const CourseGridComponent = ({ courses, toggle, deleteCourse }) => (
  <div>
    <Link to={`/table`}>
      Toggle</Link>
    <h3>Course Grid</h3>
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
