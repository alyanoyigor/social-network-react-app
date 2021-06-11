import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let postsData = [
  { id: 1, message: "Post 1", likes: "5" },
  { id: 2, message: "Post 2", likes: "3" },
];

let dialogsData = [
  { id: 1, name: "Maria" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Karina" },
  { id: 4, name: "Victor" },
  { id: 5, name: "Ann" },
];

let messagesData = [
  { id: 1, message: "Hello!" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Hey nice weather today isn't it?" },
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
