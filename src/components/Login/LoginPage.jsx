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
      {(formik) => {
        const { values, isSubmitting, errors, touched } = formik;
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
            <div>
              <button
                type="submit"
                disabled={isSubmitting || errors.email || errors.password}
              >
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
