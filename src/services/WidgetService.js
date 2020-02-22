import {
  WIDGET_API_URL_ID,
  WIDGET_API_URL_GENERIC,
  TOPICS_WIDGETS_API_URL_CUSTOM
} from "../common/constants";


/**
 * FETCH
 * Returns widgets belonging to specific topic id.
 */
export const findAllWidgetsForTopic = topicId =>
    fetch(TOPICS_WIDGETS_API_URL_CUSTOM(topicId)).then(response => response.json());

/**
 * GET
 * Returns the widget matching the passed widget id.
 */
export const findWidget = topicId =>
    fetch(TOPICS_WIDGETS_API_URL_CUSTOM(topicId), {
      method: "GET"
    }).then(response => response.json());

/**
 * POST
 * Creates new widget with the passed information under the passed topic id.
 */
export const createWidget = (topicId, widget) =>
    fetch(WIDGET_API_URL_ID(topicId), {
      method: "POST",
      body: JSON.stringify(widget),
      headers: {
        "content-type": "application/json"
      }
    }).then(response => response.json());

/**
 * UPDATE
 * Updates the widget matching the passed id with the widget content provided.
 */
export const updateWidget = (widgetId, widget) =>
    fetch(WIDGET_API_URL_ID(widget), {
      method: "PUT",
      body: JSON.stringify(widget),
      headers: {
        "content-type": "application/json"
      }
    }).then(response => response.json());

/**
 * DELETE
 * Deletes the widget matching the passed id.
 */
export const deleteWidget = widgetId =>
    fetch(WIDGET_API_URL_ID(widgetId), {
      method: "DELETE"
    }).then(response => response.json());

export default {
  findAllWidgetsForTopic,
  findWidget,
  createWidget,
  updateWidget,
  deleteWidget
};
