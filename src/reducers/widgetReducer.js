import {
    FIND_ALL_WIDGETS_FOR_TOPIC,
    FIND_ALL_WIDGETS,
    FIND_WIDGET,
    CREATE_WIDGET,
    DELETE_LESSON,
    UPDATE_WIDGET
} from "../actions/widgetActions";


const widgetReducer = (state = { widgets: [] }, action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            return {
                widgets: [...state.widgets, action.widget]
            };
        case FIND_ALL_WIDGETS_FOR_TOPIC:
            return {
                widgets: [...state.widgets]
            };

        case FIND_ALL_WIDGETS:
            return {
                widgets: [...state.widgets]
            };
        case FIND_WIDGET:
            return {
                widgets: [...state.widgets, action.widgets]
            };

        case DELETE_LESSON:
            return {
                widgets: [...state.widgets, action.widgets]
            };
        case UPDATE_WIDGET:
            return {
                widget: action.widget
            };

        default:
            return state
    }
}

export default widgetReducer
