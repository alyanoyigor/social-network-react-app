import React from "react";
import s from "./Dialogs.module.css";
import DialogUserItem from "./DialogUserItem/DialogUserItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogsData.map((d) => (
    <DialogUserItem id={d.id} img={d.img} name={d.name} />
  ));
  let messagesElements = props.dialogsPage.messagesData.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElem = React.createRef();
  function sendNewMessage() {
    props.dispatch({ type: "SEND-MESSAGE" });
    newMessageElem.current.value = "";
  }

  let onMessageChange = () => {
    let text = newMessageElem.current.value;
    props.dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", newText: text });
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.sendMessageBlock}>
        <textarea
          className={s.newMessageElem}
          ref={newMessageElem}
          onChange={onMessageChange}
          value={props.dialogsPage.newMessageText}
        />
        <button onClick={sendNewMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
