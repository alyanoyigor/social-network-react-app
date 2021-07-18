import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { onMessageChange, sendNewMessage } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default connect(mapStateToProps, { sendNewMessage, onMessageChange })(
  withAuthRedirect(Dialogs)
);
