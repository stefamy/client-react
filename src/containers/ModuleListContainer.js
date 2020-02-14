import { connect } from "react-redux";
import service from "../services/ModuleService";
import {
  findModulesForCourse,
  createModule,
  deleteModule,
  findModule,
  updateModule
} from "../actions/moduleActions";
import ModuleListComponent from "../components/editor/ModuleListComponent";

const stateToPropertyMapper = state => ({
  modules: state.modules.modules
});

const dispatchToPropertyMapper = dispatch => ({
  createModule: (courseId, module) =>
    service
      .createModule(courseId, module)
      .then(actualModule => dispatch(createModule(actualModule))),
  findModulesForCourse: courseId =>
    service
      .findModulesForCourse(courseId)
      .then(modules => dispatch(findModulesForCourse(modules))),
  deleteModule: moduleId =>
    service
      .deleteModule(moduleId)
      .then(modules => dispatch(deleteModule(modules))),
  findModule: moduleId =>
    service
      .findModule(moduleId)
      .then(actualModule => dispatch(findModule(actualModule))),
  updateModule: (moduleId, module) =>
    service
      .updateModule(moduleId, module)
      .then(actualModule => dispatch(updateModule(actualModule)))
});

const ModuleListContainer = connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(ModuleListComponent);

export default ModuleListContainer;
