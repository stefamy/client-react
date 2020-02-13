import React from "react";
import ModuleListItem from "./ModuleListItem";

export default class ModuleListComponent extends React.Component {
  componentDidMount() {
    this.props.findModulesForCourse(this.props.courseId);
  }

  state = {
    activeModuleId: this.props.moduleId,
    editingModuleId: ""
  };

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
                  editingModuleId: module._id
                });
              }}
              select={() => {
                const moduleId = module._id;
                this.props.history.push(
                  `/course/${this.props.courseId}/module/${moduleId}`
                );
                this.setState({
                  activeModuleId: module._id
                });
              }}
              save={() => {
                this.setState({
                  editingModuleId: ""
                });
              }}
              deleteModule={() => {
                const moduleId = module._id;
                const courseId = this.props.courseId;
                this.props.deleteModule(moduleId).then(() => {
                  this.props.history.push(`/course/${courseId}`);
                });

                this.setState({
                  editingModuleId: ""
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
