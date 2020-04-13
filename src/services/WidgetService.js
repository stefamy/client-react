import { LOCAL_API_URL } from "../constants/app-constants";

export const createWidget = async (topicId, widget) => {
  delete widget.id;
  delete widget.isNew;
  const response = await fetch(`${LOCAL_API_URL}/topics/${topicId}/widgets`, {
    method: "POST",
    body: JSON.stringify(widget),
    headers: {
      'content-type': 'application/json'
    }
  })
  return await response.json()
}

export const findWidgetsForTopic = async (topicId) => {
  const response = await fetch(`${LOCAL_API_URL}/topics/${topicId}/widgets`, {
    headers: {
      'content-type': 'application/json'
    }
  })

  return await response.json()
}

export const findWidgetById = async (widgetId) => {
  const response = await fetch(`${LOCAL_API_URL}/widgets/${widgetId}`, {
    headers: {
      'content-type': 'application/json'
    }
  })

  return await response.json();
}

export const updateWidget = async (widgetId, widget) => {
  const response = await fetch(`${LOCAL_API_URL}/widgets/${widgetId}`, {
    method: 'PUT',
    body: JSON.stringify(widget),
    headers: {
      'content-type': 'application/json'
    }
  })

  return await response.json();
}

export const deleteWidget = async (widgetId) => {
  const response = await fetch(`${LOCAL_API_URL}/widgets/${widgetId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })

  return await response.json();
}


export default {
  createWidget,
  findWidgetsForTopic,
  findWidgetById,
  updateWidget,
  deleteWidget
}
