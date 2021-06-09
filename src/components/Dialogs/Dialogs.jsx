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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Masha" id="01" />
        <DialogItem name="Sasha" id="02" />
        <DialogItem name="Nastya" id="03" />
        <DialogItem name="Karina" id="04" />
        <DialogItem name="Andrey" id="05" />
      </div>
      <div className={s.messages}>
        <Message message="Hello!" />
        <Message message="How are you?" />
        <Message message="Hey nice weather today isn't it?" />
      </div>
    </div>
  );
};

export default Dialogs;
