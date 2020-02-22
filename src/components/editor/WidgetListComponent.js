import React from "react";
import WidgetListItem from "./WidgetListItem";

export default class WidgetListComponent extends React.Component {
  componentDidMount() {
    // this.props.findModulesForCourse(this.props.courseId);
  }


  state = {
    activeModuleId: this.props.moduleId,
    editingModuleId: "",
    newModuleTitle: ""
  };

  /**
   * @param {{_id}} _id
   */
  render() {
    return (
        <ul className="list-group">
          {this.props.modules &&
          this.props.modules.map(module => (
              <ModuleListItem
                  key={module._id}
                  edit={() => {
                    const moduleId = module._id;
                    this.props.history.push(
                        `/course/${this.props.courseId}/module/${moduleId}`
                    );
                    this.setState({
                      editingModuleId: module._id,
                      newModuleTitle: module.title
                    });
                  }}
                  select={() => {
                    const moduleId = module._id;
                    this.props.history.push(
                        `/course/${this.props.courseId}/module/${moduleId}`
                    );
                    this.setState({
                      activeModuleId: moduleId,
                      newModuleTitle: module.title
                    });
                  }}
                  onTextEntry={entry => {
                    this.setState({
                      newModuleTitle: entry
                    });
                  }}
                  save={() => {
                    const moduleId = module._id;
                    const courseId = this.props.courseId;
                    const newTitle = this.state.newModuleTitle;
                    this.setState({
                      editingModuleId: "",
                      activeModuleId: ""
                    });
                    this.props
                    .updateModule(moduleId, {
                      title: newTitle
                    })
                    .then(() => {
                      this.props.history.push(
                          `/course/${courseId}/module/${moduleId}`
                      );
                    });
                  }}
                  deleteModule={() => {
                    const moduleId = module._id;
                    const courseId = this.props.courseId;
                    this.setState({
                      editingModuleId: "",
                      newModuleTitle: ""
                    });
                    this.props.deleteModule(moduleId).then(() => {
                      this.props.history.push(`/course/${courseId}`);
                    });
                  }}
                  editing={module._id === this.state.editingModuleId}
                  active={module._id === this.state.activeModuleId}
                  module={module}
              />
          ))}
          <li className="list-group-item">
            <button
                onClick={() =>
                    this.props.createModule(this.props.courseId, {
                      title: "New Module"
                    })
                }
            >
              Add
            </button>
          </li>
        </ul>
    );
  }
}
