import React from "react";
import { updateCourse } from "../services/CourseService";

class CourseGridCell extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    menuOpen: false,
    editing: false,
    course: this.props.course
  };

  render() {
    return (
      <div class="course-card-outer col-lg-4 col-md-6 col wbdv-card wbdv-course">
        <div class="course-card">
          <div class="course-card-info">
            <div class="course-title wbdv-row wbdv-title">
              {!this.state.editing && (
                <a href="#" onClick={this.props.showCourseEditor}>
                  <span class="course-title">{this.state.course.title}</span>
                </a>
              )}
              {this.state.editing && (
                <span class="course-title">
                  <input
                    type="text"
                    class="form-control"
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
            <div class="row">
              <div class="col course-modified-date hide-mobile wbdv-row wbdv-modified-date">
                <i class="fas fa-file-alt wbdv-row wbdv-icon"></i>
                <i class="fas fa-user-friends"></i>
                <span class="gray detail">
                  Modified {this.state.course.dateModified}
                </span>
              </div>
              <div class="col-1 course-edit">
                {!this.state.menuOpen && (
                  <button
                    onClick={() =>
                      this.setState({ menuOpen: true, editing: true })
                    }
                  >
                    <i class="fas fa-ellipsis-v"></i>
                  </button>
                )}
                {this.state.menuOpen && (
                  <div>
                    <button
                      onClick={() => this.props.deleteCourse(this.props.course)}
                    >
                      <i class="fas fa-times"></i>
                    </button>
                    {this.state.editing && (
                      <button
                        onClick={e => {
                          updateCourse(
                            this.state.course._id,
                            this.state.course
                          ).then(status => {});
                          this.setState({
                            editing: false,
                            menuOpen: false
                          });
                        }}
                      >
                        <i class="fas fa-check"></i>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseGridCell;
