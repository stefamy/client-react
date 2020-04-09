import React from "react";
import LessonTabsContainer from "../../containers/LessonTabsContainer";
import TopicTabsContainer from "../../containers/TopicTabsContainer";
import WidgetListContainer from "../../containers/WidgetListContainer";
import { Link } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import modules from "../../reducers/moduleReducer";
import lessons from "../../reducers/lessonReducer";
import topics from "../../reducers/topicReducer";
import widgets from "../../reducers/widgetReducer";
import ModuleListContainer from "../../containers/ModuleListContainer";

const reducers = combineReducers({
  modules,
  lessons,
  widgets,
  topics
});

const store = createStore(reducers);

const CourseEditorComponent = ({ courseId, moduleId, lessonId, topicId, history }) => (
  <Provider store={store}>
    <div>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Close
      </button>
      <h2>course id: {courseId} </h2>
      <Link to="/">Back</Link>
      <h3>Course Editor </h3>
      <div className="row">
        <div className="col-3">
          <ModuleListContainer
            history={history}
            courseId={courseId}
            moduleId={moduleId}
          />
        </div>
        <div className="col-9">
          <LessonTabsContainer
              history={history}
              moduleId={moduleId}
              courseId={courseId} />
          <TopicTabsContainer
              history={history}
              moduleId={moduleId}
              courseId={courseId}
              lessonId={lessonId} />
          <WidgetListContainer
              history={history}
              moduleId={moduleId}
              courseId={courseId}
              lessonId={lessonId}
              topicId={topicId} />
        </div>
      </div>
    </div>
  </Provider>
);
export default CourseEditorComponent;
