import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ loggedIn }) => {
  return !!loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.userSignin.isLoggedIn,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
