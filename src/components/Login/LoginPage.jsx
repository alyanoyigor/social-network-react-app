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
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      checkbox: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
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
          value={formik.values.login}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
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
