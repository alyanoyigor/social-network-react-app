const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (
  state = {
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
  action
) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};
export const sendNewMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const onMessageChangeActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
