import s from "./../User.module.css";
import userImage from "./../../../assets/img/image.webp";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
              axios
                .delete(
                  `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "495fe8d9-a4d5-413f-b24a-9c5f77cd6403",
                    },
                  }
                )
                .then((response) => {
                  if (response.data.resultCode === 0)
                    props.followedToggleUsers(props.id);
                });
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={() =>
              axios
                .post(
                  `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                  {},
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "495fe8d9-a4d5-413f-b24a-9c5f77cd6403",
                    },
                  }
                )
                .then((response) => {
                  if (response.data.resultCode === 0)
                    props.followedToggleUsers(props.id);
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
