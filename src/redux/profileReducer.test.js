import profileReducer, { addNewPost, deletePost } from "./profileReducer";
const initialState = {
	postsData: [
		{ id: 1, message: "Post 1", likes: "5" },
		{ id: 2, message: "Post 2", likes: "3" },
		{ id: 3, message: "Post 3", likes: "4" },
	],
	profile: null,
	status: "",
};
describe("profileReducer testing", () => {
	test("postsData length should be incremented", () => {
		const newPost = addNewPost("Post 4");
		const profile = profileReducer(initialState, newPost);

		expect(profile.postsData.length).toBe(4);
	});

	test("postsData length should be decremented", () => {
		const profile = profileReducer(initialState, deletePost(3));
		expect(profile.postsData.length).toBe(2);
	});
});
