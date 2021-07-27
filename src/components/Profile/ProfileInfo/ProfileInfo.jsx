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
        <img src={props.profile.photos.large} />
        <h1>{props.profile.fullName}</h1>

        <ProfileStatus
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />

        {props.profile.aboutMe ? (
          <p style={{ marginTop: "10px" }}>About me: {props.profile.aboutMe}</p>
        ) : null}

        {props.profile.contacts.facebook ? (
          <div className={s.facebook}>
            <img src={Facebook} />
            <span>{props.profile.contacts.facebook}</span>
          </div>
        ) : null}

        <div>
          <span>Looking for a job: </span>
          {props.profile.lookingForAJob ? <img src={yes} /> : <img src={no} />}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
