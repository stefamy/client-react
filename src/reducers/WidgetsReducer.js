import _ from 'lodash';
import { FIND_ALL_WIDGETS, CREATE_WIDGET, DELETE_WIDGET, UPDATE_WIDGET, UPDATE_TEXT, UPDATE_SIZE, UPDATE_NAME } from "../constants/WidgetConstants";

const initialState = {
    widgets: []
}

const widgetsReducer = (state = initialState, action) => {
    let widgets, indexToUpdate;
    switch (action.type) {
        case FIND_ALL_WIDGETS:
            widgets = _.sortBy(action.widgets, 'orderWidget')
            return {
                widgets: widgets
            }

        case CREATE_WIDGET:
            widgets = [...state.widgets];
            widgets.push(action.newWidget);

            return {
                widgets: widgets
            }

        case DELETE_WIDGET:
            widgets = [...state.widgets];
            _.remove(widgets, { id: action.widgetId })

            return {
                widgets: widgets
            }

        case UPDATE_WIDGET:
            widgets = [...state.widgets];
            indexToUpdate = _.findIndex(widgets, { id: action.widget.id });
            widgets.splice(indexToUpdate, 1, action.widget);

            return {
                widgets: _.cloneDeep(widgets)
            }

        case UPDATE_TEXT:
            widgets = [...state.widgets];
            indexToUpdate = _.findIndex(widgets, { id: action.widgetId });
            widgets[indexToUpdate].text = action.text;

            return {
                widgets: _.cloneDeep(widgets)
            }

        case UPDATE_SIZE:
            widgets = [...state.widgets];
            indexToUpdate = _.findIndex(widgets, { id: action.widgetId });
            widgets[indexToUpdate].size = action.size;

            return {
                widgets: _.cloneDeep(widgets)
            }

        case UPDATE_NAME:
            //
            // topics = [...state.topics];
            // const indexToUpdate = _.findIndex(topics, {id: action.topic.id});
            // topics.splice(indexToUpdate, 1, action.topic);
            //
            // return {
            //     topics: _.cloneDeep(topics)
            // }
            //
            widgets = [...state.widgets];
            indexToUpdate = _.findIndex(widgets, { id: action.widgetId });
            widgets[indexToUpdate].name = action.name;

            return {
                widgets: _.cloneDeep(widgets)
            }
        default:
            return state
    }
}

export default widgetsReducer;