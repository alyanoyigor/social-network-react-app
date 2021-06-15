import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post message={p.message} likes={p.likes} />
  ));

  let newPostEl = React.createRef();
  function addNewPost() {
    let text = newPostEl.current.value;
    props.addPost(text);
    newPostEl.current.value = "";
  }
  function deleteText() {
    newPostEl.current.value = "";
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostEl} cols="80" rows="5"></textarea>
        </div>
        <div>
          <button onClick={addNewPost} className={s.button}>
            Send
          </button>
          <button onClick={deleteText} className={s.button}>
            Delete
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
