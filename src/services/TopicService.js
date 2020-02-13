import { LESSONS_API_URL, MODULES_LESSONS_API_URL } from "../common/constants";

/**
 * FETCH
 * Returns lessons belonging to specific module id.
 */
export const findLessonsForModule = moduleId =>
  fetch(MODULES_LESSONS_API_URL(moduleId)).then(response => response.json());

/**
 * POST
 * Creates new lesson with the passed information under the passed module id.
 */
export const createLesson = (moduleId, lesson) =>
  fetch(LESSONS_API_URL(moduleId), {
    method: "POST",
    body: JSON.stringify(lesson),
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
