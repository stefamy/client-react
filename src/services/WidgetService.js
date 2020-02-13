export const findAllWidgets = () =>
  fetch(
    "https://wbdv-generic-server.herokuapp.com/api/jannunzi/widgets"
  ).then(response => response.json());

export const deleteWidget = widgetId =>
  fetch(
    `https://wbdv-generic-server.herokuapp.com/api/jannunzi//widgets/${widgetId}`,
    {
      method: "DELETE"
    }
  ).then(response => response.json());

export const createWidget = widget =>
  fetch("https://wbdv-generic-server.herokuapp.com/api/jannunzi/widgets", {
    method: "POST",
    body: JSON.stringify(widget),
    headers: {
      "content-type": "application/json"
    }
  }).then(response => response.json());
