import s from "./../User.module.css";
import userImage from "./../../../assets/img/image.webp";
import { NavLink } from "react-router-dom";

const UsersItem = (props) => {
  const {photos, followingInProgress, unfollow, follow, followed, id, name, status} = props;
  return (
    <div className={s.users}>
      <NavLink to={"/profile/" + id}>
        <img
          src={photos.small != null ? photos.small : userImage}
          alt=""
        />
        <p>{name}</p>
      </NavLink>
      <p>{status}</p>
      <div>
        {followed ? (
          <button
            disabled={followingInProgress.some((id) => id === id)}
            onClick={() => unfollow(id)}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === id)}
            onClick={() => follow(id)}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};
export default UsersItem;
