import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    postsData: [
      { id: 1, message: "Post 1", likes: "5" },
      { id: 2, message: "Post 2", likes: "3" },
    ],
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
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    likes: 0,
  };
  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state);
};

export let sendMessage = (message) => {
  let newMessage = {
    id: 4,
    message,
  };
  state.dialogsPage.messagesData.push(newMessage);
  rerenderEntireTree(state);
};

export default state;
