// const lessons = [
//     {_id: "123", title: "Lesson 123"},
//     {_id: "234", title: "Lesson 234"},
//     {_id: "345", title: "Lesson 345"},
//     {_id: "456", title: "Lesson 456"}
// ]

// ===> (State A)

const lessonReducer = (state = { lessons: [] }, action) => {
  switch (action.type) {
    case "CREATE_LESSON":
      return {
        lessons: [...state.lessons, action.lesson]
      };
    case "DELETE_LESSON":
      return {
        lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
      };
    case "UPDATE_LESSON":
      return {
        lessons: state.lessons.map(lesson =>
          lesson._id === action.lessonId ? action.lesson : lesson
        )
      };
    case "FIND_LESSONS_FOR_MODULE":
      return {
        lessons: action.lessons
      };
    case "FIND_ALL_LESSONS":
      return {
        lessons: action.lessons
      };
    default:
      return state;
  }
};

export default lessonReducer;
