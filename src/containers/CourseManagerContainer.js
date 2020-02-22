import React from "react";
import CourseEditorComponent from "../components/editor/CourseEditorComponent";
import CourseGridComponent from "../components/list/CourseGridComponent";
import CourseTableComponent from "../components/list/CourseTableComponent";

import { createCourse, findAllCourses } from "../services/CourseService";

import { BrowserRouter as Router, Route } from "react-router-dom";
import CourseHeadingComponent from "../components/list/CourseHeadingComponent";

class CourseManagerContainer extends React.Component {
  state = {
    showEditor: false,
    layout: "table",
    newCourseTitle: "New Course",
    courses: []
  };

  componentDidMount = async () => {
    const courses = await findAllCourses();
    this.setState({
      courses: courses
    });
  };

  deleteCourse = async deletedToCourse => {
    const courses = await findAllCourses();
    this.setState({
      courses: courses
    });
  };

  addCourse = () => {
    createCourse({
      title: this.state.newCourseTitle
    })
      .then(actual => {
        return findAllCourses();
      })
      .then(courses => {
        this.setState({
          courses: courses
        });
      });
  };

  toggle = () => {
    this.setState(prevState => ({
      layout: prevState.layout === "grid" ? "table" : "grid"
    }));
  };

  updateFormState = event => {
    console.log(event.target.value);
    this.setState({
      newCourseTitle: event.target.value
    });
  };

  editCourse = course => {
    this.setState(prevState => ({
      courses: prevState.courses.map(c => {
        c.editing = false;
        if (c._id === course._id) {
          c.editing = true;
        } else {
          c.editing = false;
        }
        return c;
      })
    }));
  };

  showEditor = () =>
    this.setState({
      showEditor: true
    });

  hideEditor = () =>
    this.setState({
      showEditor: false
    });


  /**
   * @param {{courseId:string}} courseId
   * @param {{moduleId:string}} moduleId
   * @param {{lessonId:string}} lessonId
   * @param {{topicId:string}} topicId
   */
  render() {
    return (
      <div className="container-fluid">
        <h1>Course Manager</h1>

        <CourseHeadingComponent />
        <input
            onChange={this.updateFormState}
            value="helloooooo"
            placeholder="New Course Title"
        />
        <button onClick={this.addCourse}>Add</button>

        <Router>
          <Route
              path="/"
              exact={true}
              render={props => (
                  <CourseTableComponent
                      {...props}
                      courses={this.state.courses}
                      courseId={props.match.params.courseId}
                      hideEditor={this.hideEditor}
                  />
              )}
          />
          <Route
              path="/grid"
              exact={true}
              render={props => (
                  <CourseGridComponent
                      {...props}
                      courses={this.state.courses}
                      courseId={props.match.params.courseId}
                      hideEditor={this.hideEditor}
                  />
              )}
          />
          <Route
              path="/table"
              exact={true}
              render={props => (
                  <CourseTableComponent
                      {...props}
                      courses={this.state.courses}
                      courseId={props.match.params.courseId}
                      hideEditor={this.hideEditor}
                  />
              )}
          />
          <Route
            path="/course/:courseId"
            exact={true}
            render={props => (
              <CourseEditorComponent
                {...props}
                courseId={props.match.params.courseId}
                hideEditor={this.hideEditor}
              />
            )}
          />
          <Route
            path="/course/:courseId/module/:moduleId"
            exact={true}
            render={props => (
              <CourseEditorComponent
                {...props}
                moduleId={props.match.params.moduleId}
                courseId={props.match.params.courseId}
                hideEditor={this.hideEditor}
              />
            )}
          />
          <Route
            path="/course/:courseId/module/:moduleId/lesson/:lessonId"
            exact={true}
            render={props => (
              <CourseEditorComponent
                {...props}
                moduleId={props.match.params.moduleId}
                courseId={props.match.params.courseId}
                lessonId={props.match.params.lessonId}
                hideEditor={this.hideEditor}
              />
            )}
          />
          <Route
              path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
              exact={true}
              render={props => (
                  <CourseEditorComponent
                      {...props}
                      lessonId={props.match.params.lessonId}
                      moduleId={props.match.params.moduleId}
                      courseId={props.match.params.courseId}
                      topicId={props.match.params.topicId}
                      hideEditor={this.hideEditor}
                  />
              )}
          />
       </Router>
      </div>
    );
  }
}

export default CourseManagerContainer;
