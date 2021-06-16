import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  addPost,
  sendMessage,
  updateNewPostText,
  updateNewMessageText,
} from "./redux/state.js";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          sendMessage={sendMessage}
          updateNewPostText={updateNewPostText}
          updateNewMessageText={updateNewMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
