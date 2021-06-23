import UsersItem from "./UserItem/UserItem";

const Users = (props) => {
  debugger;
  let usersElements = props.usersPage.map((u) => (
    <UsersItem
      id={u.id}
      img={u.img}
      fullname={u.fullname}
      status={u.status}
      location={u.location}
      followed={u.followed}
      followedToggleUsers={props.followedToggleUsers}
    />
  ));
  return (
    <div>
      <div>{usersElements}</div>
    </div>
  );
};
export default Users;
