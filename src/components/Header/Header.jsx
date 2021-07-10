import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
        alt="Logo"
      />
      <div className={s.login}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
