export const COURSES_API_URL =
  "https://wbdv-generic-server.herokuapp.com/api/stefamy4405/courses";
export const LESSONS_API_URL = lessonId =>
 `https://wbdv-generic-server.herokuapp.com/api/stefamy4405/lessons/${lessonId}`;
export const MODULE_API_URL = moduleId =>
  `https://wbdv-generic-server.herokuapp.com/api/stefamy4405/modules/${moduleId}`;

export const COURSES_MODULES_API_URL = courseId =>
  `https://wbdv-generic-server.herokuapp.com/api/stefamy4405/courses/${courseId}/modules`;
export const MODULES_LESSONS_API_URL = moduleId =>
  `https://wbdv-generic-server.herokuapp.com/api/stefamy4405/modules/${moduleId}/lessons`;
export const LESSONS_TOPICS_API_URL = lessonId =>
  `https://wbdv-generic-server.herokuapp.com/api/stefamy4405/lessons/${lessonId}/topics`;
export const TOPICS_API_URL = topicId =>
  `https://wbdv-generic-server.herokuapp.com/api/stefamy4405/topics/${topicId}`;


export const WIDGET_API_URL_GENERIC =
    "http://localhost:8080/api/widgets";
export const TOPICS_WIDGETS_API_URL_CUSTOM = topicId =>
  `http://localhost:8080/api/topics/${topicId}/widgets`;
export const WIDGET_API_URL_ID = widgetId =>
    `http://localhost:8080/api/widgets/${widgetId}`;


