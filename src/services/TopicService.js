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
 * Returns the lesson matching the passed lesson id.
 */
export const findLesson = lessonId =>
  fetch(LESSONS_API_URL(lessonId), {
    method: "GET"
  }).then(response => response.json());

/**
 * UPDATE
 * Updates the lesson matching the passed id with the lesson content provided.
 */
export const updateLesson = (lessonId, lesson) =>
  fetch(LESSONS_API_URL(lessonId), {
    method: "PUT",
    body: JSON.stringify(lesson),
    headers: {
      "content-type": "application/json"
    }
  }).then(response => response.json());

/**
 * DELETE
 * Deletes the lesson matching the passed id.
 */
export const deleteLesson = lessonId =>
  fetch(LESSONS_API_URL(lessonId), {
    method: "DELETE"
  }).then(response => response.json());

export default {
  findLessonsForModule,
  createLesson,
  findLesson,
  updateLesson,
  deleteLesson
};
