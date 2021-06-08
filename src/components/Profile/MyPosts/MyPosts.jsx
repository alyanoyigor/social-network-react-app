import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Send</button>
        <button>Delete</button>
      </div>
      <div className={s.posts}>
        <Post message="Post 1" likes="5"/>
        <Post message="Post 2" likes="3"/>
      </div>
    </div>
  );
};

export default MyPosts;
