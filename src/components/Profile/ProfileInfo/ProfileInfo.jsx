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
      <div>
        <img src="https://natworld.info/wp-content/uploads/2018/01/%D0%A1%D0%BE%D1%87%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BC%D1%83-%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0.jpeg" />
      </div>
      <div className={s.avatar}>
        <img src={props.profile.photos.large} />
        <h1>{props.profile.fullName}</h1>
        <ProfileStatus status="hey hey bro"/>
        <p>{props.profile.aboutMe}</p>
        <div className={s.facebook}>
          {props.profile.contacts.facebook ? <img src={Facebook} /> : null}
          <span>{props.profile.contacts.facebook}</span>
        </div>
        <div>
          <span>Looking for a job: </span>
          {props.profile.lookingForAJob ? <img src={yes} /> : <img src={no} />}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
