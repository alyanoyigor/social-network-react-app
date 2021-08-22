import React, { useState } from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	const toggleEditMode = () => {
		setEditMode(!editMode);
		if (editMode) props.updateUserStatus(status);
	};

	const onUserStatusChange = (event) => {
		setStatus(event.currentTarget.value);
	};

	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevProps.status !== this.props.status) {
	// 		this.setState({
	// 			status: this.props.status,
	// 		});
	// 	}
	// }

	return (
		<div>
			{editMode ? (
				<div>
					<input
						onChange={onUserStatusChange}
						autoFocus={true}
						className={s.status}
						onBlur={toggleEditMode}
						type="text"
						value={status}
					/>
				</div>
			) : (
				<div onClick={toggleEditMode} className={s.status}>
					<span>{status}</span>
				</div>
			)}
		</div>
	);
};

export default ProfileStatusWithHooks;
