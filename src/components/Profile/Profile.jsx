import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        postsData={props.profilePage.postsData}
        addPost={props.addPost}
      />
    </div>
  );
};

export default Profile;
