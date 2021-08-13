import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
  let initialValues = {
    email: "",
    password: "",
    checkbox: false,
  };

  let onSubmit = (values, { setSubmitting, resetForm }) => {
    const { email, password, rememberMe } = values;
    props.login(email, password, rememberMe);
    resetForm({ values: { email: "", password: "", checkbox: false } });
    setSubmitting(false);
  };

  let validate = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "Required";
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
          <label htmlFor="email">Login</label> <br />
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" />
        </div>
        <div>
          <Field type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </Form>
    </Formik>
  );
};
const LoginPage = (props) => {
  if (props.isAuth) return <Redirect to="/profile" />;
  return (
    <div>
      <h1>Login</h1>
      <LoginForm login={props.login} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isAuth: state.auth.isAuth };
};

export default connect(mapStateToProps, { login })(LoginPage);
