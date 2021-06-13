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
    let text = newMessageElem.current.value;
    alert(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.formSendMessage}>
        <textarea className={s.newMessageElem} ref={newMessageElem}></textarea>
        <button onClick={sendNewMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
