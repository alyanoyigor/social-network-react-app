import {
  onMessageChangeActionCreator,
  sendNewMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();
  let sendNewMessage = () => {
    props.store.dispatch(sendNewMessageActionCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(onMessageChangeActionCreator(text));
  };

  return (
    <Dialogs
      sendNewMessage={sendNewMessage}
      onMessageChange={onMessageChange}
      dialogsPage={state.dialogsPage}
    />
  );
};

export default DialogsContainer;
