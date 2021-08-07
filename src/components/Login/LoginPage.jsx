import React from "react";
import { useFormik } from "formik";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

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

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  }); 

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="login">Login</label> <br />
        <input
          type="login"
          id="login"
          name="login"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.login}
        />
        {formik.touched.login && formik.errors.login ? (
          <span style={{ color: "red" }}>{formik.errors.login}</span>
        ) : null}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <span style={{ color: "red" }}>{formik.errors.password}</span>
        ) : null}
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          onChange={formik.handleChange}
          value={formik.values.checkbox}
        />
        <label htmlFor="checkbox">Remeber me</label>
      </div>
      <div>
        <button type="submit">Log in</button>
      </div>
    </form>
  );
};
export default LoginPage;
