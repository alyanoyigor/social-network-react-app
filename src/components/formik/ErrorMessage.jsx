import s from "./ErrorMessage.module.css";

export const Error = (props) => {
  return <p className={s.error}>{props.children}</p>;
};
