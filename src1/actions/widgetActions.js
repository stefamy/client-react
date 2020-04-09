export const CREATE_WIDGET = "CREATE_WIDGET";
export const createWidget = widget => ({
  type: CREATE_WIDGET,
  widget: widget
});

export const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC";
export const findAllWidgetsForTopic = widgets => ({
  type: FIND_ALL_WIDGETS_FOR_TOPIC,
  widgets: widgets
});

export const FIND_ALL_WIDGETS = "FIND_ALL_WIDGETS";
export const findAllWidgets = widgets => ({
  type: FIND_ALL_WIDGETS,
  widgets: widgets
});

export const FIND_WIDGET = "FIND_WIDGET";
export const findWidget = widget => ({
  type: FIND_WIDGET,
  widget: widget
});

export const UPDATE_WIDGET = "UPDATE_WIDGET";
export const updateWidget = widget => ({
  type: UPDATE_WIDGET,
  widget: widget
});

export const DELETE_LESSON = "DELETE_LESSON";
export const deleteWidget = widgets => ({
  type: DELETE_LESSON,
  widgets: widgets
});

