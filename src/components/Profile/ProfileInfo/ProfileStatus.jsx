import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              autoFocus={true}
              className={s.status}
              onBlur={this.toggleEditMode}
              type="text"
              value={this.props.status}
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
