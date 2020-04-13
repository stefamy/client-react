import { FIND_ALL_WIDGETS, CREATE_WIDGET, DELETE_WIDGET, UPDATE_WIDGET } from "../constants/WidgetConstants";

export const findAllWidgets = (widgets) => ({
    type: FIND_ALL_WIDGETS,
    widgets: widgets
})

export const createWidget = (newWidget) => ({
    type: CREATE_WIDGET,
    newWidget: newWidget
})

export const deleteWidget = (widgetId) => ({
    type: DELETE_WIDGET,
    widgetId: widgetId
})

export const updateWidget = (widget) => ({
    type: UPDATE_WIDGET,
    widget: widget
})


export default {
    createWidget,
    findAllWidgets,
    deleteWidget,
    updateWidget
}
