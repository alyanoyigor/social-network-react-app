import axios from "axios";
import UsersItem from "./UserItem/UserItem";

const Users = (props) => {
  let getUsers = () => {
    if (props.usersPage.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };
  let usersElements = props.usersPage.map((u) => (
    <UsersItem
      id={u.id}
      photos={u.photos}
      name={u.name}
      status={u.status}
      location={u.location}
      followed={u.followed}
      followedToggleUsers={props.followedToggleUsers}
    />
  ));
  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      <div>{usersElements}</div>
    </div>
  );
};
export default Users;

/* props.setUsers([
  {
    id: 1,
    img: "https://s3.r29static.com/bin/entry/75b/0,112,2000,2000/x,80/1882682/image.jpg",
    followed: true,
    name: "Igor",
    status: "I'm learn ReactJS",
    location: { city: "LA", country: "USA" },
  },
  {
    id: 2,
    img: "https://s3.r29static.com/bin/entry/75b/0,112,2000,2000/x,80/1882682/image.jpg",
    followed: false,
    name: "Andrew",
    status: "Axaaxaxa i'm crazy guy!",
    location: { city: "Kiev", country: "Ukraine" },
  },
  {
    id: 3,
    img: "https://s3.r29static.com/bin/entry/75b/0,112,2000,2000/x,80/1882682/image.jpg",
    followed: true,
    name: "Vita",
    status: "Hello everyone!",
    location: { city: "Lviv", country: "Ukraine" },
  },
]); */
