import { MODULE_API_URL, COURSES_MODULES_API_URL } from "../common/constants";

/**
 * FETCH
 * Returns modules belonging to specific course id.
 */
export const findModulesForCourse = courseId =>
  fetch(COURSES_MODULES_API_URL(courseId)).then(response => response.json());

/**
 * POST
 * Creates new module with the passed information under the passed course id.
 */
export const createModule = (courseId, module) =>
  fetch(COURSES_MODULES_API_URL(courseId), {
    method: "POST",
    body: JSON.stringify(module),
    headers: {
      "content-type": "application/json"
    }
  }).then(response => response.json());

/**
 * GET
 * Returns the module matching the passed module id.
 */
export const findModule = moduleId =>
  fetch(MODULE_API_URL(moduleId), {
    method: "GET"
  }).then(response => response.json());

/**
 * UPDATE
 * Updates the module matching the passed id with the module content provided.
 */
export const updateModule = (moduleId, module) =>
  fetch(MODULE_API_URL(moduleId), {
    method: "PUT",
    body: JSON.stringify(module),
    headers: {
      "content-type": "application/json"
    }
  }).then(response => response.json());

/**
 * DELETE
 * Deletes the module matching the passed id.
 */
export const deleteModule = moduleId =>
  fetch(MODULE_API_URL(moduleId), {
    method: "DELETE"
  }).then(response => response.json());

export default {
  findModulesForCourse,
  createModule,
  findModule,
  updateModule,
  deleteModule
};
