import "./Signup.scss";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
//formik import
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

// Creating schema

function Signup() {
  async function sendPostRequest(url, data) {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  const navigate = useNavigate();
  return (
    <Container fluid className="login-container mt-5">
      <Row>
        <Col md={12} xs={12}>
          {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = "Required";
              }

              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Required";
              } else if (values.password.length < 2) {
                errors.password = "Password must be at least 8 characters";
              }
              if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Passwords must match";
              }
              return errors;
            }}
            onSubmit={async (values) => {
              console.log(values.name, values.email, values.password);

              const data = {
                first_name: values.name,
                email: values.email,
                password: values.password,
              };
              const responseData = await sendPostRequest(
                process.env.REACT_APP_URL + process.env.REACT_APP_SIGNUP,
                data
              );
              console.log(responseData);
              if (data !== null) {
                navigate("/login");
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <div className="signup">
                <div className="form">
                  <form noValidate onSubmit={handleSubmit}>
                    <span>Sign Up</span>

                    <input
                      type="name"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      placeholder="Enter your name"
                      className="form-control inp_text"
                      id="name"
                    />
                    <ErrorMessage name="firstName" component="div" />
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Enter email id / username"
                      className="form-control inp_text"
                      id="email"
                    />
                    <ErrorMessage name="email" component="div" />
                    <p className="error">
                      {errors.email && touched.email && errors.email}
                    </p>

                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter password"
                      className="form-control"
                    />
                    <ErrorMessage name="password" component="div" />
                    <p className="error">
                      {errors.password && touched.password && errors.password}
                    </p>
                    <input
                      type="password"
                      name="confirmPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Confirm Password"
                      className="form-control"
                    />
                    <ErrorMessage name="confirmPassword" component="div" />
                    <button type="submit">Sign Up</button>
                  </form>
                </div>
              </div>
            )}
          </Formik>

          {/* {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <div className="signup">
                <div className="form">
                 
                  <form noValidate onSubmit={handleSubmit}>
                    <span>Sign Up</span>
                   
                    <input
                      type="name"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      placeholder="Enter your name"
                      className="form-control inp_text"
                      id="name"
                    />
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Enter email id / username"
                      className="form-control inp_text"
                      id="email"
                    />
                   
                    <p className="error">
                      {errors.email && touched.email && errors.email}
                    </p>
                    
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Enter password"
                      className="form-control"
                    />

                   
                    <p className="error">
                      {errors.password && touched.password && errors.password}
                    </p>
                    
                    <button type="submit">Sign Up</button>
                  </form>
                </div>
              </div>
            )}
          </Formik> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
