import {
  CREATE_TOPIC,
  FIND_TOPICS_FOR_LESSON,
  DELETE_TOPIC,
  FIND_TOPIC,
  UPDATE_TOPIC
} from "../actions/topicActions";

const topicReducer = (state = { topics: [] }, action) => {
  switch (action.type) {
    case CREATE_TOPIC:
      return {
        topics: [...state.topics, action.topic]
      };
    case FIND_TOPICS_FOR_LESSON:
      return {
        topics: action.topics
      };
    case DELETE_TOPIC:
      return {
        topics: [...state.topics]
      };
    case FIND_TOPIC:
      return {
        topic: action.topic
      };
    case UPDATE_TOPIC:
      return {
        topic: action.topic
      };

    default:
      return state;
  }
};

export default topicReducer;
