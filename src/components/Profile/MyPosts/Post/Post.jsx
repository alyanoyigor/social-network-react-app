import s from "./Post.module.css";

const Post = (props) => {
	return (
		<div className={s.post}>
			<img
				src="https://secure.gravatar.com/avatar/2b1f5d7721294be65386260100c75ae4?s=96&d=https%3A%2F%2Ffutureiot.tech%2Fwp-content%2Fthemes%2Fjnews-child%2Favatar.png&r=g"
				alt="User Photo"
			/>
			<span>{props.message}</span>
			<div>
				<span>likes</span> {props.likes}
			</div>
		</div>
	);
};

export default Post;
