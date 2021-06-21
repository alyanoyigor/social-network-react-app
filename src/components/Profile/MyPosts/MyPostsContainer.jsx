import {
  addNewPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => dispatch(addNewPostActionCreator()),
    onPostChange: (text) => dispatch(onPostChangeActionCreator(text)),
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
