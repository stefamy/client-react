import React from "react";
import { updateCourse } from "../services/CourseService";

class CourseTableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    editing: false,
    course: this.props.course
  };

  render() {
    return (
      <div class="course-row wbdv-row wbdv-course">
        <div class="row">
          <div class="col-lg-6 col-10 course-title wbdv-row wbdv-title">
            <i className="fa fa-file-alt wbdv-row wbdv-icon"></i>
            {!this.state.editing && (
              <a href="#" onClick={this.props.showCourseEditor}>
                <span class="course-title">{this.state.course.title}</span>
              </a>
            )}
            {this.state.editing && (
              <span class="course-title">
                <input
                  onChange={e =>
                    this.setState({
                      course: {
                        ...this.state.course,
                        title: e.target.value
                      }
                    })
                  }
                  value={this.state.course.title}
                />
              </span>
            )}
          </div>
          <div class="col-lg-2 course-owner text-center hide-mobile wbdv-row wbdv-owner">
            <span class="gray detail">{this.state.course.owner}</span>
          </div>
          <div class="col-lg-2 course-modified-date text-center hide-mobile wbdv-row wbdv-modified-date">
            <span class="gray detail">{this.state.course.dateModified}</span>
          </div>
          <div class="col-2 course-delete text-center">
            {!this.state.editing && (
              <button onClick={() => this.setState({ editing: true })}>
                <i className="fa fa-pencil"></i>
              </button>
            )}

            {this.state.editing && (
              <button
                onClick={e => {
                  updateCourse(
                    this.state.course._id,
                    this.state.course
                  ).then(status => {});
                  this.setState({
                    editing: false
                  });
                }}
              >
                <i className="fa fa-check text-success"></i>
              </button>
            )}
            <button onClick={() => this.props.deleteCourse(this.props.course)}>
              <i className="fa fa-times text-danger"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseTableRow;
