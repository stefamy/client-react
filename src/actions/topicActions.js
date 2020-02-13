export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON";
export const findTopicsForLesson = topics => ({
  type: FIND_TOPICS_FOR_LESSON,
  topics: topics
});

export const CREATE_TOPIC = "CREATE_TOPIC";
export const createTopic = topic => ({
  type: CREATE_TOPIC,
  topic: topic
});

export const FIND_TOPIC = "FIND_TOPIC";
export const findTopic = topic => ({
  type: FIND_TOPIC,
  topic: topic
});

export const UPDATE_TOPIC = "UPDATE_TOPIC";
export const updateTopic = topic => ({
  type: UPDATE_TOPIC,
  topic: topic
});

export const DELETE_TOPIC = "DELETE_TOPIC";
export const DELETE_TOPIC = topics => ({
  type: DELETE_LESSON,
  topics: topics
});
