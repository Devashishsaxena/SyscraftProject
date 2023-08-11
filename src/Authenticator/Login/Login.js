import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
//formik import
import { Formik } from "formik";
import * as Yup from "yup";

//imports for login functionalty
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { signin } from "../../redux/actions/UserActions";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(3, "Password must be at least 8 characters"),
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //states
  // const [user, setUser] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");
  // const [isLoggedin, setIsLoggedIn] = useState(false);

  const getState = useSelector((state) => state);
  console.log(getState, "at login (state value)");

  const { userSignin: userInfo } = useSelector((state) => state);

  useEffect(() => {
    if (userInfo.isLoggedIn) {
      console.log(userInfo, "inside if at login");
      navigate("/customer_dashboard");
    }
  });

  return (
    <Container fluid className="login-container mt-5">
      <Row>
        <Col md={12} xs={12}>
          {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
          <Formik
            validationSchema={schema}
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
              dispatch(signin(values));
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
              <div className="login">
                <div className="form">
                  {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                  <form noValidate onSubmit={handleSubmit}>
                    <span>Login</span>
                    {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
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
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.email && touched.email && errors.email}
                    </p>
                    {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Enter password"
                      className="form-control"
                    />
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.password && touched.password && errors.password}
                    </p>
                    <p>
                      Doesn't have an account? <br />
                      <Link to="/signup">Register here!</Link>
                    </p>
                    {/* Click on submit button to submit the form */}
                    <button type="submit">Login</button>
                  </form>
                </div>
              </div>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
