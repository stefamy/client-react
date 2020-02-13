import {
  CREATE_LESSON,
  FIND_LESSONS_FOR_MODULE,
  DELETE_LESSON,
  FIND_LESSON,
  UPDATE_LESSON
} from "../actions/lessonActions";

const lessonReducer = (state = { lessons: [] }, action) => {
  switch (action.type) {
    case CREATE_LESSON:
      return {
        lessons: [...state.lessons, action.lesson]
      };
    case FIND_LESSONS_FOR_MODULE:
      return {
        lessons: action.lessons
      };
    case DELETE_LESSON:
      return {
        lessons: [...state.lessons]
        // lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
      };
    case FIND_LESSON:
      return {
        lesson: action.lesson
      };
    case UPDATE_LESSON:
      return {
        lesson: action.lesson
        // lessons: state.lessons.map(lesson =>
        //   lesson._id === action.lessonId ? action.lesson : lesson
        // )
      };
    default:
      return state;
  }
};

export default lessonReducer;
