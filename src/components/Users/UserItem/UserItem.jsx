import s from "./UserItem.module.css";

const UsersItem = (props) => {
  return (
    <div className={s.users}>
      <img src={props.img} alt="" />
      <div>{props.fullname}</div>
      <div>{props.status}</div>
      <div>
        {props.location.city}, {props.location.country}
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
