import React from "react";
import LessonTabsContainer from "../../containers/LessonTabsContainer";
import { Link } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import modules from "../../reducers/moduleReducer";
import lessons from "../../reducers/lessonReducer";
import topics from "../../reducers/topicReducer";
import widgets from "../../reducers/widgetReducer";
import ModuleListContainer from "../../containers/ModuleListContainer";
import WidgetList from "./WidgetList";

const reducers = combineReducers({
  modules,
  lessons,
  widgets,
  topics
});

const store = createStore(reducers);

const CourseEditorComponent = ({ courseId, moduleId, history }) => (
  <Provider store={store}>
    <div>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Close
      </button>
      <Link to="/">Back</Link>
      <h3>Course Editor {courseId}</h3>
      <div className="row">
        <div className="col-3">
          <ModuleListContainer
            moduleId={moduleId}
            history={history}
            courseId={courseId}
          />
        </div>
        <div className="col-9">
          <LessonTabsContainer history={history} moduleId={moduleId} />
          {/*<TopicPills/>*/}
          <WidgetList />
        </div>
      </div>
    </div>
  </Provider>
);
export default CourseEditorComponent;
