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
            onClick={() => {
              usersAPI.unfollow(props.id).then((data) => {
                if (data.resultCode === 0) props.followedToggleUsers(props.id);
              });
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={() =>
              usersAPI.follow(props.id).then((data) => {
                if (data.resultCode === 0) props.followedToggleUsers(props.id);
              })
            }
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};
export default UsersItem;
