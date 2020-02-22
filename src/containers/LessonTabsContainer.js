import { connect } from "react-redux";
import service from "../services/LessonService";
import {
  findLessonsForModule,
  createLesson,
  deleteLesson,
  findLesson,
  updateLesson
} from "../actions/lessonActions";
import LessonTabComponent from "../components/editor/LessonTabComponent";

const stateToPropertyMapper = state => ({
  lessons: state.lessons.lessons
});

const dispatchToPropertyMapper = dispatch => ({
  createLesson: (moduleId, lesson) =>
    service
      .createLesson(moduleId, lesson)
      .then(actualLesson => dispatch(createLesson(actualLesson))),
  findLessonsForModule: moduleId =>
    service
      .findLessonsForModule(moduleId)
      .then(lessons => dispatch(findLessonsForModule(lessons))),
  deleteLesson: lessonId =>
    service
      .deleteLesson(lessonId)
      .then(lessons => dispatch(deleteLesson(lessons))),
  findLesson: lessonId =>
    service
      .findLesson(lessonId)
      .then(actualLesson => dispatch(findLesson(actualLesson))),
  updateLesson: (lessonId, lesson) =>
    service
      .updateLesson(lessonId, lesson)
      .then(lessons => dispatch(updateLesson(lessons)))
});

const LessonTabsContainer = connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(LessonTabComponent);

export default LessonTabsContainer;
