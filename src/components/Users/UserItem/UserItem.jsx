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
        <div>{props.name}</div>
      </NavLink>
      <div>{props.status}</div>
      <div>
        {"props.location.city"}, {"props.location.country"}
      </div>
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
