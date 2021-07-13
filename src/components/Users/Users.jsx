import s from "./User.module.css";
import UsersItem from "./UserItem/UserItem";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageUsersCount);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const usersPagination = pages.map((p) => (
    <span
      className={props.currentUsersPage === p && s.selectedPage}
      onClick={() => props.onPageChanged(p)}
    >
      {p}
    </span>
  ));

  const usersElements = props.users.map((u) => (
    <UsersItem
      id={u.id}
      photos={u.photos}
      name={u.name}
      status={u.status}
      location={u.location}
      followed={u.followed}
      followedToggleUsers={props.followedToggleUsers}
      toggleFollowingInProgress={props.toggleFollowingInProgress}
      followingInProgress={props.followingInProgress}
    />
  ));

  return (
    <div>
      <div>{usersPagination}</div>
      <div>{usersElements}</div>
    </div>
  );
};

export default Users;
