import { connect } from "react-redux";
import service from "../services/TopicService";
import {
  findTopicsForLesson,
  createTopic,
  deleteTopic,
  findTopic,
  updateTopic
} from "../actions/topicActions";
import TopicTabComponent from "../components/editor/TopicTabComponent";

const stateToPropertyMapper = state => ({
  topics: state.topics.topics
});

const dispatchToPropertyMapper = dispatch => ({
  createTopic: (lessonId, topic) =>
      service
      .createTopic(lessonId, topic)
      .then(actualTopic => dispatch(createTopic(actualTopic))),
  findTopicsForLesson: lessonId =>
      service
      .findTopicsForLesson(lessonId)
      .then(topics => dispatch(findTopicsForLesson(topics))),
  deleteTopic: topicId =>
      service
      .deleteTopic(topicId)
      .then(topics => dispatch(deleteTopic(topics))),
  findTopic: topicId =>
      service
      .findTopic(topicId)
      .then(actualTopic => dispatch(findTopic(actualTopic))),
  updateTopic: (topicId, topic) =>
      service
      .updateTopic(topicId, topic)
      .then(topics => dispatch(updateTopic(topics)))
});

const TopicTabsContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(TopicTabComponent);

export default TopicTabsContainer;
