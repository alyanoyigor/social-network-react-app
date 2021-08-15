import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import { Error } from "../formik/ErrorMessage";
import s from "./LoginPage.module.css";

const LoginForm = (props) => {
  let initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  let onSubmit = (values, actions) => {
    props.login(values, actions);
    actions.resetForm();
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
      {(formik) => {
        const { errors, touched, isValid, status } = formik;
        return (
          <Form>
            <div>
              <label htmlFor="email">Login</label> <br />
              <Field
                type="email"
                id="email"
                name="email"
                className={errors.email && touched.email ? s.error : ""}
              />
              <ErrorMessage name="email" component={Error} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <br />
              <Field
                type="password"
                id="password"
                name="password"
                className={errors.password && touched.password ? s.error : ""}
              />
              <ErrorMessage name="password" component={Error} />
            </div>
            <div className={s.rememberMe}>
              <Field type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe" className={s.rememberMeText}>
                Remember me
              </label>
            </div>
            <div>{status}</div>
            <div>
              <button type="submit" disabled={!isValid}>
                Log in
              </button>
            </div>
          </Form>
        );
      }}
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
