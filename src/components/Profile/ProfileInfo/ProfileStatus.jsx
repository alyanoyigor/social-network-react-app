import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
    if (this.state.editMode) this.props.updateUserStatus(this.state.status);
  };

  onUserStatusChange = (event) => {
    this.setState({
      status: event.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              onChange={this.onUserStatusChange}
              autoFocus={true}
              className={s.status}
              onBlur={this.toggleEditMode}
              type="text"
              value={this.state.status}
            />
          </div>
        ) : (
          <div onClick={this.toggleEditMode} className={s.status}>
            <span>{this.props.status}</span>
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
