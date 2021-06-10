import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Maria" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Karina" },
    { id: 4, name: "Victor" },
    { id: 5, name: "Ann" },
  ];

  let dialogsElements = dialogsData.map((d) => (
    <DialogItem id={d.id} name={d.name} />
  ));

  let messagesData = [
    { id: 1, message: "Hello!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Hey nice weather today isn't it?" },
  ];

  let messagesElements = messagesData.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
