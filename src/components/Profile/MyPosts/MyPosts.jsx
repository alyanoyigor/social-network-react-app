import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Error } from "../../formik/ErrorMessage";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post message={p.message} likes={p.likes} />
  ));

  let handleSubmit = (values, { setSubmitting, resetForm }) => {
    props.addNewPost(values.newPostText);
    resetForm({ values: { newPostText: "" } });
    setSubmitting(false);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostForm onSubmit={handleSubmit} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const AddPostForm = (props) => {
  const initialValues = { newPostText: "" };
  const validate = (values) => {
    const errors = {};
    if (!values.newPostText) {
      errors.newPostText = "Required";
    }
    return errors;
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={props.onSubmit}
    >
      {(formik) => {
        const { isSubmitting, errors, touched } = formik;
        return (
          <Form>
            <div>
              <Field
                name="newPostText"
                as="textarea"
                cols="80"
                rows="4"
                className={
                  errors.newPostText && touched.newPostText ? s.error : ""
                }
              />
            </div>
            <ErrorMessage name="newPostText" component={Error} />
            <div>
              <button
                type="submit"
                disabled={isSubmitting || errors.newPostText}
                className={s.button}
              >
                Send
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default MyPosts;
