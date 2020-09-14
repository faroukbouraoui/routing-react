import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Prompt } from "react-router-dom";
export default function UsersForm(props) {
  const schema = Yup.object({
    name: Yup.string().max(30, "must be 2 car or less").required("Required"),
    email: Yup.string().email("Invalid email adrdess").required("Required"),
  });

  return (
    <Formik
      enableReinitialize={true}
      initialValues={props.values}
      onSubmit={props.onSubmit}
      validationSchema={schema}
      render={(props) => {
        return (
          <Form>
            <Prompt when={props.dirty} message={'sure '} />

            <label>Name : </label>
            <Field name="name" />
            <ErrorMessage name="name" />
            <br />

            <label>Email : </label>
            <Field name="email" />
            <ErrorMessage name="email" />
            <br />
            <button type="submit">Send</button>
          </Form>
        );
      }}
    />
  );
}
