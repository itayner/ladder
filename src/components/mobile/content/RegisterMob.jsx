import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import vertScroll from "../../../util/vertScroll";
import { useNavigate } from "react-router-dom";

function RegisterMob(props) {
  const navigate = useNavigate();
  const initialValues = {
    first: "",
    last: "",
    email: "",
    password1: "",
    password2: "",
  };
  const onSubmit = (values) => {
    console.log(values);
    navigate("/register2");
    return true;
  };
  const handleChange = () => {};
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
  useEffect(() => {
    vertScroll("#reg-mob-container");
  }, []);

  return (
    <div className="reg-mob-container" id="reg-mob-container">
      <div className="reg-mob-wrapper">
        {/*
                <form>
                    <div className='mb-1'>
                        <label className='form-label' htmlFor='first'>Name</label>
                        <input name='first' type='text' className='form-control' placeholder='first' />
                        <input name='last' type='text' className='form-control' placeholder='last' />
                    </div>
                    <div className='mb-1'>
                        <label className='form-label' htmlFor='email'>Email</label>
                        <input name='email' type='text' className='form-control'  />
                    </div>
                    <div className='mb-1'>
                        <label className='form-label' htmlFor='password'>Create Password</label>
                        <input name='password' type='password' className='form-control' placeholder='password' />
                        <input name='passwordConfirmation' type='password' className='form-control' placeholder='confirm password' />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                    */}
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
              <div className="mb-1">
                <label className="form-label" htmlFor="first">
                  Name
                </label>
                <Field
                  name="first"
                  type="text"
                  className="form-control"
                  placeholder="first"
                  onChange={handleChange}
                />
                <Field
                  name="last"
                  type="text"
                  className="form-control"
                  placeholder="last"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-1">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <Field name="email" type="text" className="form-control" />
              </div>
              <div className="mb-1">
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
              <button type="submit" className="btn btn-primary">
                Next
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RegisterMob;
