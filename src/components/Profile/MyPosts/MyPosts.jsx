import { withFormik } from "formik";
import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post message={p.message} likes={p.likes} />
  ));

  let handleSubmit = (values, { setSubmitting }) => {
    props.addNewPost(values.newPostText);
    setSubmitting(false);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostFormWithFormik handleSubmit={handleSubmit} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const AddPostForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea
          name="newPostText"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.newPostText}
          cols="80"
          rows="5"
        />
      </div>
      {errors.newPostText && touched.newPostText && (
        <div id="feedback">{errors.newPostText}</div>
      )}
      <div>
        <button
          type="submit"
          disabled={isSubmitting || errors.newPostText}
          className={s.button}
        >
          Send
        </button>
      </div>
    </form>
  );
};

const AddPostFormWithFormik = (props) => {
  const { handleSubmit } = props;
  const FormWithFormik = withFormik({
    mapPropsToValues: () => ({ newPostText: "" }),
    validate: (values) => {
      const errors = {};
      if (!values.newPostText) {
        errors.newPostText = "Required";
      }
      return errors;
    },
    handleSubmit,
  })(AddPostForm);
  return <FormWithFormik />;
};

export default MyPosts;
