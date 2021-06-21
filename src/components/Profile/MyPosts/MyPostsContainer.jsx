import {
  addNewPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "./../../../StoreContext";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addNewPost = () => {
          store.dispatch(addNewPostActionCreator());
        };

        let onPostChange = (text) => {
          store.dispatch(onPostChangeActionCreator(text));
        };
        return (
          <MyPosts
            onPostChange={onPostChange}
            addNewPost={addNewPost}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
