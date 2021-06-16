let rerenderEntireTree = () => {};

let state = {
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
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likes: 0,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let sendMessage = () => {
  let newMessage = {
    id: 4,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export let subscribe = (observer) => {
  rerenderEntireTree = observer;
};
export default state;
