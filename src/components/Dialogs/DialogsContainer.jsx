import { connect } from "react-redux";
import {
  onMessageChangeActionCreator,
  sendNewMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendNewMessage: () => dispatch(sendNewMessageActionCreator()),
    onMessageChange: (text) => dispatch(onMessageChangeActionCreator(text)),
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
