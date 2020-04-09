import { connect } from "react-redux";
import service from "../services/WidgetService";
import {
  findAllWidgetsForTopic,
  findAllWidgets,
  createWidget,
  deleteWidget,
  findWidget,
  updateWidget
} from "../actions/widgetActions";
import WidgetListComponent from "../components/editor/WidgetListComponent";

const stateToPropertyMapper = state => ({
  widgets: state.widgets.widgets
});

const dispatchToPropertyMapper = dispatch => ({
  createWidget: (topicId, widget) =>
      service
      .createWidget(topicId, widget)
      .then(actualWidget => dispatch(createWidget(actualWidget))),
  findAllWidgetsForTopic: topicId =>
      service
      .findAllWidgetsForTopic(topicId)
      .then(widgets => dispatch(findAllWidgetsForTopic(widgets))),
  findAllWidgets: () =>
      service
      .findAllWidgets()
      .then(widgets => dispatch(findAllWidgets(widgets))),
  deleteWidget: widgetId =>
      service
      .deleteWidget(widgetId)
      .then(widgets => dispatch(deleteWidget(widgets))),
  findWidget: widgetId =>
      service
      .findWidget(widgetId)
      .then(actualWidget => dispatch(findWidget(actualWidget))),
  updateWidget: (widgetId, widget) =>
      service
      .updateWidget(widgetId, widget)
      .then(widgets => dispatch(updateWidget(widgets)))
});

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetListComponent);

export default WidgetListContainer;
