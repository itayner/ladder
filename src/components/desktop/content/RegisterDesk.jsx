import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function RegisterDesk(props) {
  const initialValues = {
    first: "",
    last: "",
    email: "",
    password1: "",
    password2: "",
  };
  const onSubmit = (values) => {
    return false;
  };
  const validationSchema = Yup.object({
    first: Yup.string().required().min(2).label("First name"),
    last: Yup.string().required().min(2).label("Last name"),
    email: Yup.string().email().required().label("Email"),
    password1: Yup.string().required().min(3).label("Password"),
    password2: Yup.string()
      .required()
      .oneOf([Yup.ref("password1")], "Passwords do not match")
      .label("Password"),
    //.min(3, 'Password is too short - should be 3 chars minimum.'),
    //.matches(/[0-9]/, 'Password must contain #')
    //.matches(/[a-z]/, 'Password must contain lowercase letter')
    //.matches(/[A-Z]/, 'Password must contain uppercase letter'),
    //password2: Yup.string().required().oneOf([Yup.ref("password")], "Passwords do not match"),
  });

  const getErrorElem = (errors) => {
    const msg = Object.values(errors).at(0);
    return (
      <div className="" style={{ color: "#dc3545" }}>
        {msg}
      </div>
    );
  };

  return (
    <div className="reg-desk-container">
      <div className="reg-desk-wrapper">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ errors, touched }) => (
            <Form>
              {errors && getErrorElem(errors)}
              <div className="mb-3 mt-2">
                <label className="form-label" htmlFor="first">
                  Name
                </label>
                <Field
                  name="first"
                  type="text"
                  className="form-control"
                  placeholder="first"
                />
                <Field
                  name="last"
                  type="text"
                  className="form-control"
                  placeholder="last"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <Field name="email" type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Create Password
                </label>
                <Field
                  name="password1"
                  type="password"
                  className="form-control"
                  placeholder="password"
                />
                <Field
                  name="password2"
                  type="password"
                  className="form-control"
                  placeholder="confirm password"
                />
              </div>
              <button
                type="submit"
                onClick={() => {
                  console.log(errors);
                }}
                className="btn btn-primary"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RegisterDesk;
