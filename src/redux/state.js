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
  addPost() {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likes: 0,
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  sendMessage() {
    let newMessage = {
      id: 4,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
}

window.store = store;

export default store;
