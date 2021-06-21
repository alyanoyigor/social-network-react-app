const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  postsData: [
    { id: 1, message: "Post 1", likes: "5" },
    { id: 2, message: "Post 2", likes: "3" },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: state.newPostText,
        likes: 0,
      };
      let stateCopy = { ...state };
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};
export const addNewPostActionCreator = () => ({ type: ADD_POST });
export const onPostChangeActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
