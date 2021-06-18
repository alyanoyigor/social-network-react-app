import React from "react";
import { addNewPostActionCreator, onPostChangeActionCreator } from "../../../redux/state";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post message={p.message} likes={p.likes} />
  ));

  let newPostEl = React.createRef();

  let addNewPost = () => {
    props.dispatch(addNewPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostEl.current.value;
    props.dispatch(onPostChangeActionCreator(text));
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={props.newPostText}
            ref={newPostEl}
            cols="80"
            rows="5"
          />
        </div>
        <div>
          <button onClick={addNewPost} className={s.button}>
            Send
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
