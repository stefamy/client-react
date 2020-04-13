import _ from 'lodash';
import { FIND_ALL_WIDGETS, CREATE_WIDGET, DELETE_WIDGET, UPDATE_WIDGET} from "../constants/WidgetConstants";

const initialState = {
    widgets: []
}

const widgetsReducer = (state = initialState, action) => {
    let widgets, indexToUpdate
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
            _.remove(widgets, { tempId: action.widgetId })

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


        default:
            return state
    }
}

export default widgetsReducer;
