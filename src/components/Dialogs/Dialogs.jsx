import { ErrorMessage, Field, Form, Formik } from "formik";
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

  let handleSubmit = (values, { setSubmitting, resetForm }) => {
    props.sendNewMessage(values.message);
    resetForm({ values: { message: "" } });
    setSubmitting(false);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <DialogsForm onSubmit={handleSubmit} />
    </div>
  );
};

const DialogsForm = (props) => {
  const initialValues = { message: "" };
  const validate = (values) => {
    const errors = {};
    if (!values.message) {
      errors.message = "Required";
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
        const { isSubmitting, errors } = formik;
        return (
          <Form className={s.sendMessageBlock}>
            <Field
              as="textarea"
              id="message"
              name="message"
              className={s.newMessageElem}
            />
            <ErrorMessage name="message" component="div" />
            <button type="submit" disabled={isSubmitting || errors.message}>
              Send
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Dialogs;
