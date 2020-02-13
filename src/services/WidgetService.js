import { WIDGET_API_URL_CUSTOM, WIDGET_API_URL } from "../common/constants";

export const findAllWidgets = () =>
  fetch(WIDGET_API_URL).then(response => response.json());

export const deleteWidget = widgetId =>
  fetch(WIDGET_API_URL_CUSTOM(widgetId), {
    method: "DELETE"
  }).then(response => response.json());

export const createWidget = widget =>
  fetch(WIDGET_API_URL, {
    method: "POST",
    body: JSON.stringify(widget),
    headers: {
      "content-type": "application/json"
    }
  }).then(response => response.json());
