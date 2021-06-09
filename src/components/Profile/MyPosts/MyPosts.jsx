import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div  className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <di>
          <textarea></textarea>
        </di>
        <div>
          <button className={s.button}>Send</button>
          <button className={s.button}>Delete</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Post 1" likes="5" />
        <Post message="Post 2" likes="3" />
      </div>
    </div>
  );
};

export default MyPosts;
