import s from "./../User.module.css";
import userImage from "./../../../assets/img/image.webp";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

const UsersItem = (props) => {
  return (
    <div className={s.users}>
      <NavLink to={"/profile/" + props.id}>
        <img
          src={props.photos.small != null ? props.photos.small : userImage}
          alt=""
        />
        <p>{props.name}</p>
      </NavLink>
      <p>{props.status}</p>
      <div>
        {props.followed ? (
          <button
            disabled={props.followingInProgress.some((id) => id === props.id)}
            onClick={() => {
              props.toggleFollowingInProgress(true, props.id);
              usersAPI.unfollow(props.id).then((data) => {
                if (data.resultCode === 0) props.followedToggleUsers(props.id);
                props.toggleFollowingInProgress(false, props.id);
              });
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={props.followingInProgress.some((id) => id === props.id)}
            onClick={() => {
              props.toggleFollowingInProgress(true, props.id);
              usersAPI.follow(props.id).then((data) => {
                if (data.resultCode === 0) props.followedToggleUsers(props.id);
                props.toggleFollowingInProgress(false, props.id);
              });
            }}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};
export default UsersItem;
