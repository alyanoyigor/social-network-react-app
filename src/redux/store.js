import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Post 1", likes: "5" },
        { id: 2, message: "Post 2", likes: "3" },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogsData: [
        {
          id: 1,
          img: "https://randomuser.me/api/portraits/women/81.jpg",
          name: "Maria",
        },
        {
          id: 2,
          img: "https://randomuser.me/api/portraits/men/64.jpg",
          name: "Alex",
        },
        {
          id: 3,
          img: "https://randomuser.me/api/portraits/women/4.jpg",
          name: "Karina",
        },
        {
          id: 4,
          img: "https://randomuser.me/api/portraits/men/55.jpg",
          name: "Victor",
        },
        {
          id: 5,
          img: "https://randomuser.me/api/portraits/women/64.jpg",
          name: "Ann",
        },
      ],
      messagesData: [
        { id: 1, message: "Hello!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Hey nice weather today isn't it?" },
      ],
      newMessageText: "",
    },
  },
  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
