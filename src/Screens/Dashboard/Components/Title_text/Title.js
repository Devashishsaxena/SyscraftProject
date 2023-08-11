import React from "react";
import "./Text.scss";
import { useSelector } from "react-redux";
function Title() {
  const { userSignin: userInfo } = useSelector((state) => state);
  console.log(userInfo, "at title dashboard (REDUX)");
  console.log(userInfo.userInfo.data.user.first_name);
  return (
    <>
      <div className="greetUser">
        <h1 style={{ textTransform: "capitalize" }}>
          Hola,{" "}
          {userInfo.isLoggedIn ? (
            <>{userInfo.userInfo.data.user.first_name}</>
          ) : (
            <>Hugo</>
          )}
        </h1>
        <p>Gald to see you again !</p>
      </div>
    </>
  );
}

export default Title;
