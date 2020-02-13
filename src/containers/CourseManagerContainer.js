import React from "react";
import CourseHeadingComponent from "../components/courseList/CourseHeadingComponent";
import CourseTableComponent from "../components/courseList/CourseTableComponent";
import CourseGridComponent from "../components/courseList/CourseGridComponent";
// import CourseService from "../services/CourseService";
import ModuleList from "../components/courseEditor/ModuleListComponent";
import CourseEditorComponent from "../components/courseEditor/CourseEditorComponent";

// const courseService = new CourseService()

import {
  createCourse,
  findAllCourses,
  deleteCourse
} from "../services/CourseService";
import CourseListComponent from "../components/courseList/CourseListComponent";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

    // courseService.findAllCourses()
    //     .then(courses => {
    //         this.setState({
    //             courses: courses
    //         })
    //     })
  };

  deleteCourse = async deletedToCourse => {
    const status = await deleteCourse(deletedToCourse._id);
    const courses = await findAllCourses();
    this.setState({
      courses: courses
    });
    // courseService.deleteCourse(deletedToCourse._id)
    //     .then(status => {
    //         return courseService.findAllCourses()
    //     })
    //     .then(courses => {
    //         this.setState({
    //             courses: courses
    //         })
    //     })

    // this.setState(prevState => ({
    //         courses: prevState.courses.filter(course =>
    //             course._id !== deletedToCourse._id
    //         )
    //     })
    // )
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

    // this.setState(prevState => ({
    //     courses: [
    //         ...prevState.courses,
    //         {
    //             _id: (new Date()).getTime() + '',
    //             title: prevState.newCourseTitle
    //         }
    //     ]
    // })
    // )
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

  // (state1) ==== event1 ====> (state2)
  // (state1) ==== event2 ====> (state3)
  // ==== eventX ====> (stateY)
  //
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

  render() {
    return (
      <div className="container-fluid">
        <h1>Course Manager</h1>

        <Router>
          {/*<Link to="/page1">Page 1</Link>*/}
          {/*<Link to="/page2">Page 2</Link>*/}
          {/*<Route path="/page1" component={Page1}/>*/}
          {/*<Route path="/page2" component={Page2}/>*/}

          <Route
            path="/"
            exact={true}
            render={() => (
              <CourseListComponent
                updateFormState={this.updateFormState}
                newCourseTitle={this.state.newCourseTitle}
                addCourse={this.addCourse}
                toggle={this.toggle}
                deleteCourse={this.deleteCourse}
                courses={this.state.courses}
                layout={this.state.layout}
                showEditor={this.showEditor}
                editCourse={this.editCourse}
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
                lessonId={props.match.params.lessonId}
                moduleId={props.match.params.moduleId}
                courseId={props.match.params.courseId}
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
