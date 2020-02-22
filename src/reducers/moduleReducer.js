import {
  CREATE_MODULE,
  FIND_MODULES_FOR_COURSE,
  DELETE_MODULE,
  FIND_MODULE,
  UPDATE_MODULE
} from "../actions/moduleActions";

const moduleReducer = (state = { modules: [] }, action) => {
  switch (action.type) {
    case CREATE_MODULE:
      return {
        modules: [...state.modules, action.module]
      };
    case FIND_MODULES_FOR_COURSE:
      return {
        modules: action.modules
      };
    case FIND_MODULE:
      return {
        module: action.module
      };
    case DELETE_MODULE:
      return {
        modules: action.modules
      };
    case UPDATE_MODULE:
      return {
        modules: [...state.modules]
      };
    default:
      return state;
  }
};

export default moduleReducer;
