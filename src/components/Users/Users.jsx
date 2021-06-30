import UsersItem from "./UserItem/UserItem";

const Users = (props) => {
  if (props.usersPage.length === 0) {
    props.setUsers([
      {
        id: 1,
        img: "https://s3.r29static.com/bin/entry/75b/0,112,2000,2000/x,80/1882682/image.jpg",
        followed: true,
        fullname: "Igor",
        status: "I'm learn ReactJS",
        location: { city: "LA", country: "USA" },
      },
      {
        id: 2,
        img: "https://s3.r29static.com/bin/entry/75b/0,112,2000,2000/x,80/1882682/image.jpg",
        followed: false,
        fullname: "Andrew",
        status: "Axaaxaxa i'm crazy guy!",
        location: { city: "Kiev", country: "Ukraine" },
      },
      {
        id: 3,
        img: "https://s3.r29static.com/bin/entry/75b/0,112,2000,2000/x,80/1882682/image.jpg",
        followed: true,
        fullname: "Vita",
        status: "Hello everyone!",
        location: { city: "Lviv", country: "Ukraine" },
      },
    ]);
  }
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
