import { ErrorMessage, Field, Form, withFormik } from "formik";
import React from "react";
import s from "./Dialogs.module.css";
import DialogUserItem from "./DialogUserItem/DialogUserItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogsData.map((d) => (
    <DialogUserItem id={d.id} img={d.img} name={d.name} />
  ));
  let messagesElements = props.dialogsPage.messagesData.map((m) => (
    <Message message={m.message} />
  ));

  let handleSubmit = (values, { setSubmitting }) => {
    props.sendNewMessage(values.message);
    setSubmitting(false);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <DialogsFormWithFormik handleSubmit={handleSubmit} />
    </div>
  );
};

const DialogsForm = (props) => {
  const { errors, isSubmitting } = props;
  return (
    <Form className={s.sendMessageBlock}>
      <Field as="textarea" name="message" className={s.newMessageElem} />
      <ErrorMessage name="message" component="div" />
      <button type="submit" disabled={isSubmitting || errors.message}>
        Send
      </button>
    </Form>
  );
};

const DialogsFormWithFormik = (props) => {
  let { handleSubmit } = props;
  let FormikForm = withFormik({
    mapPropsToValues: () => ({ message: "" }),
    validate: (values) => {
      const errors = {};
      if (!values.message) {
        errors.message = "Required";
      }
      return errors;
    },
    handleSubmit,
  })(DialogsForm);
  return <FormikForm />;
};

export default Dialogs;
