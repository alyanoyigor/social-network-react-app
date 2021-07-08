import s from "./../User.module.css";
import userImage from "./../../../assets/img/image.webp";
import { NavLink } from "react-router-dom";

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
          <button onClick={() => props.followedToggleUsers(props.id)}>
            Follow
          </button>
        ) : (
          <button onClick={() => props.followedToggleUsers(props.id)}>
            Unfollow
          </button>
        )}
      </div>
    </div>
  );
};
export default UsersItem;
