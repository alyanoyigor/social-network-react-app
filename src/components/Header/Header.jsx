import { NavLink, Redirect } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
        alt="Logo"
      />
      <HeaderLogin {...props} />
      {!props.isAuth ? (
        <div className={s.login}>
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      ) : null}
    </header>
  );
};

const HeaderLogin = (props) => {
  if (!props.isAuth) return <Redirect to="/login" />;
  return (
    <div className={s.login}>
      <p>{props.login}</p>
      <button type="button" onClick={props.logout}>
        Logout
      </button>
    </div>
  );
};

export default Header;
