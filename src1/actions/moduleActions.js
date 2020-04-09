export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE";
export const findModulesForCourse = modules => ({
  type: FIND_MODULES_FOR_COURSE,
  modules: modules
});

export const CREATE_MODULE = "CREATE_MODULE";
export const createModule = module => ({
  type: CREATE_MODULE,
  module: module
});

export const DELETE_MODULE = "DELETE_MODULE";
export const deleteModule = modules => ({
  type: DELETE_MODULE,
  modules: modules
});

export const FIND_MODULE = "FIND_MODULE";
export const findModule = module => ({
  type: FIND_MODULE,
  module: module
});

export const UPDATE_MODULE = "UPDATE_MODULE";
export const updateModule = module => ({
  type: UPDATE_MODULE,
  module: module
});
