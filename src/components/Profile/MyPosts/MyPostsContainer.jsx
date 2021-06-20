import {
  addNewPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let addNewPost = () => {
    props.store.dispatch(addNewPostActionCreator());
  };

  let onPostChange = (text) => {
    props.store.dispatch(onPostChangeActionCreator(text));
  };

  return (
    <MyPosts
      onPostChange={onPostChange}
      addNewPost={addNewPost}
      postsData={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
