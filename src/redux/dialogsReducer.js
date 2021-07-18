const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: 4, message: state.newMessageText },
        ],
        newMessageText: "",
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };

    default:
      return state;
  }
};
export const sendNewMessage = () => ({ type: SEND_MESSAGE });
export const onMessageChange = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
