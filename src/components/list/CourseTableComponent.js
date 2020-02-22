import React from "react";
import CourseRowComponentStateful from "./CourseRowComponentStateful";
import { Link } from "react-router-dom";

const CourseTableComponent = ({
  showEditor,
  editCourse,
  deleteCourse,
  courses
}) => (
  <div>
    <Link to={`/grid`}>
      Toggle</Link>
    <h3>Course Table</h3>
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
