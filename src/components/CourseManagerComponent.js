import React from "react";
import CourseManagerHeading from "./CourseManagerHeading";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import CourseEditor from "./CourseEditor/CourseEditor";
import {
  deleteCourse,
  createCourse,
  findAllCourses
} from "../services/CourseService";

class CourseManagerComponent extends React.Component {
  state = {
    layout: "table",
    editingCourse: false,
    newCourseTitle: "Whatever",
    newOwner: "me",
    newDateModified: new Date().toLocaleDateString(),
    courses: []
  };

  componentDidMount = async () => {
    const allCourses = await findAllCourses();
    this.setState({
      courses: allCourses
    });

    // findAllCourses()
    //     .then(courses => this.setState({
    //         courses: courses
    //     }))
  };

  deleteCourse = async deletedCourse => {
    const status = await deleteCourse(deletedCourse._id);
    const courses = await findAllCourses();
    this.setState({
      courses: courses
    });
    // this.setState(prevState => ({
    //     courses: prevState.courses.filter(course => course._id !== deletedCourse._id)
    // }))
  };

  toggle = () => {
    this.setState(prevState => {
      if (prevState.layout === "grid") {
        return {
          layout: "table"
        };
      } else {
        return {
          layout: "grid"
        };
      }
    });
  };

  showCourseEditor = () =>
    this.setState({
      editingCourse: true
    });

  hideCourseEditor = () =>
    this.setState({
      editingCourse: false
    });

  addCourse = async () => {
    const newCourse = {
      title: this.state.newCourseTitle,
      owner: this.state.newOwner,
      dateModified: this.state.newDateModified
    };
    const actualCourse = await createCourse(newCourse);
    console.log(actualCourse);
    const allCourses = await findAllCourses();
    this.setState({
      courses: allCourses
    });
    // this.setState(prevState => ({
    //     courses: [
    //         ...prevState.courses,
    //         {
    //             _id: (new Date()).getTime() + "",
    //             title: prevState.newCourseTitle
    //         }
    //     ]
    // }))
  };

  updateForm = e =>
    this.setState({
      newCourseTitle: e.target.value,
      newOwner: "me",
      newDateModified: new Date().toLocaleDateString()
    });

  render() {
    return (
      <div class="course-manager">
        {this.state.editingCourse && (
          <CourseEditor hideCourseEditor={this.hideCourseEditor} />
        )}
        {!this.state.editingCourse && (
          <div class="container-fluid pl-0 pr-0">
            <CourseManagerHeading
              updateForm={this.updateForm}
              newCourseTitle={this.state.newCourseTitle}
              addCourse={this.addCourse}
            />
            {this.state.layout === "table" && (
              <CourseTableComponent
                showCourseEditor={this.showCourseEditor}
                deleteCourse={this.deleteCourse}
                courses={this.state.courses}
                toggle={this.toggle}
              />
            )}
            {this.state.layout === "grid" && (
              <CourseGridComponent
                showCourseEditor={this.showCourseEditor}
                deleteCourse={this.deleteCourse}
                courses={this.state.courses}
                toggle={this.toggle}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default CourseManagerComponent;
