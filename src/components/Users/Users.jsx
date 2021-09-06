import s from "./User.module.css";
import UsersItem from "./UserItem/UserItem";

const Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageUsersCount);
	const pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	const usersPagination = pages.map((p) => (
		<span
			className={props.currentUsersPage === p && s.selectedPage}
			onClick={() => props.onPageChanged(p)}
		>
			{p}
		</span>
	));

	const usersElements = props.users.map((u) => {
		console.log(u);
		return (
			<UsersItem
				{...u}
				followingInProgress={props.followingInProgress}
				follow={props.follow}
				unfollow={props.unfollow}
			/>
		);
	});

	return (
		<div>
			<div>{usersPagination}</div>
			<div>{usersElements}</div>
		</div>
	);
};

export default Users;
