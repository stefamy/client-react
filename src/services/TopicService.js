import { LESSONS_TOPICS_API_URL, TOPICS_API_URL } from "../common/constants";

/**
 * FETCH
 * Returns topics belonging to specific lesson id.
 */
export const findTopicsForLesson = lessonId =>
  fetch(LESSONS_TOPICS_API_URL(lessonId)).then(response => response.json());

/**
 * POST
 * Creates new topic with the passed information under the passed lesson id.
 */
export const createTopic = (lessonId, topic) =>
  fetch(LESSONS_TOPICS_API_URL(lessonId), {
    method: "POST",
    body: JSON.stringify(topic),
    headers: {
      "content-type": "application/json"
    }
  }).then(response => response.json());

/**
 * GET
 * Returns the lesson matching the passed topic id.
 */
export const findTopic = topicId =>
  fetch(TOPICS_API_URL(topicId), {
    method: "GET"
  }).then(response => response.json());

/**
 * UPDATE
 * Updates the topic matching the passed id with the topic content provided.
 */
export const updateTopic = (topicId, topic) =>
  fetch(TOPICS_API_URL(topicId), {
    method: "PUT",
    body: JSON.stringify(topic),
    headers: {
      "content-type": "application/json"
    }
  }).then(response => response.json());

/**
 * DELETE
 * Deletes the topic matching the passed id.
 */
export const deleteTopic = topicId =>
  fetch(TOPICS_API_URL(topicId), {
    method: "DELETE"
  }).then(response => response.json());

export default {
  findTopicsForLesson,
  createTopic,
  findTopic,
  updateTopic,
  deleteTopic
};
