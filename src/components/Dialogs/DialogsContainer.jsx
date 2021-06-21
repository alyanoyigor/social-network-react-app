import {
  onMessageChangeActionCreator,
  sendNewMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "./../../StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let sendNewMessage = () => {
          store.dispatch(sendNewMessageActionCreator());
        };

        let onMessageChange = (text) => {
          store.dispatch(onMessageChangeActionCreator(text));
        };

        return (
          <Dialogs
            sendNewMessage={sendNewMessage}
            onMessageChange={onMessageChange}
            dialogsPage={state.dialogsPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
