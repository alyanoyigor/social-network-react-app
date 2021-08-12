import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginForm = () => {
  let initialValues = {
    login: "",
    password: "",
    checkbox: false,
  };

  let onSubmit = (values) => {
    console.log(values);
  };

  let validate = (values) => {
    let errors = {};
    if (!values.login) {
      errors.login = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="login">Login</label> <br />
          <Field type="login" id="login" name="login" />
          <ErrorMessage name="login" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" />
        </div>
        <div>
          <Field type="checkbox" id="checkbox" name="checkbox" />
          <label htmlFor="checkbox">Remember me</label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </Form>
    </Formik>
  );
};
const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
