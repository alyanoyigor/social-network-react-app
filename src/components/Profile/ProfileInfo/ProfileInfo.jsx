import s from "./ProfileInfo.module.css";
import Preloader from "./../../common/Preloader/Preloader";
import Facebook from "./../../../assets/img/facebook.svg";
import yes from "./../../../assets/img/yes.svg";
import no from "./../../../assets/img/no.svg";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />;
	}
	return (
		<div>
			<div className={s.avatar}>
				{props.profile.photos.large ? (
					<img src={props.profile.photos.large} alt="profile" />
				) : null}
				<h1>{props.profile.fullName}</h1>

				{props.status ? (
					<ProfileStatus
						status={props.status}
						updateUserStatus={props.updateUserStatus}
					/>
				) : null}

				{props.profile.aboutMe ? (
					<p id={s.aboutMe}>About me: {props.profile.aboutMe}</p>
				) : null}

				{props.profile.contacts.facebook ? (
					<div className={s.facebook}>
						<img src={Facebook} alt="facebook" />
						<span>{props.profile.contacts.facebook}</span>
					</div>
				) : null}

				<div>
					<span>Looking for a job: </span>
					{props.profile.lookingForAJob ? (
						<img src={yes} alt="yes" />
					) : (
						<img src={no} alt="no" />
					)}
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
