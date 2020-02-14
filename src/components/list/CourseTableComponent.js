import React from "react";
import CourseRowComponentStateful from "./CourseRowComponentStateful";
import { Link } from "react-router-dom";

const CourseTableComponent = ({
  showEditor,
  editCourse,
  deleteCourse,
  courses,
  toggle
}) => (
  <div>
    <h3>Course Table {courses.length}</h3>
    <button onClick={() => toggle("grid")}>Toggle</button>
    <ul className="list-group">
      {courses.map(course => (
        <CourseRowComponentStateful
          showEditor={showEditor}
          editCourse={editCourse}
          deleteCourse={deleteCourse}
          key={course._id}
          course={course}
        />
      ))}
    </ul>
  </div>
);

export default CourseTableComponent;