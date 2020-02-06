import React from "react";
import { updateCourse } from "../services/CourseService";
import { screenshot } from "../imgs/screenshots/screenshot1.png";

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
      <div class="course-card-outer col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 wbdv-card wbdv-course">
        <div class="course-card">
          <div class="course-card-info">
            <div class="row">
              <div class="col-lg-12 col-10 course-title wbdv-row wbdv-title">
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
              <div class="col-2 col-lg-12">
                <div class="row">
                  <div class="col-10 course-modified-date  hide-mobile wbdv-row wbdv-modified-date">
                    <i className="fa fa-file-text wbdv-row wbdv-icon"></i>
                    <i className="fa fa-users"></i>
                    <span class="gray detail">
                      Modified {this.state.course.dateModified}
                    </span>
                  </div>
                  <div class="col align-items-center text-center course-edit p-0">
                    {!this.state.menuOpen && (
                      <div class="p-0">
                        <button
                          onClick={() =>
                            this.setState({ menuOpen: true, editing: true })
                          }
                        >
                          <i className="fa fa-ellipsis-v"></i>
                        </button>
                      </div>
                    )}
                    {this.state.menuOpen && (
                      <div class="p-0">
                        <button
                          onClick={() =>
                            this.props.deleteCourse(this.props.course)
                          }
                        >
                          <i className="fa fa-times text-danger"></i>
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
                            <i className="fa fa-check text-success"></i>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseGridCell;
