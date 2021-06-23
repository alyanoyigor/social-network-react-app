const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
  users: [
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
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, followed: !user.followed };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};
export const toggleFollowAC = (id) => ({ type: TOGGLE_FOLLOW, userId: id });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
