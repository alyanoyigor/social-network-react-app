import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogUserItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>
        <img src={props.img} alt="" />
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogUserItem;
