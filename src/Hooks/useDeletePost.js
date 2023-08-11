import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useDeletePost = (request_url="") => {

  const [data, setData] = useState(null);
  const [request_data, setRequestData] = useState(null);
  const getState = useSelector((state) => state);
  const urls={
    "delete_project": "/customer/project/remove",
    "delete_address": "/customer/profile/address/delete",
    "delete_service": "/vendor/service/delete",
  }
  const headers = {
    method: "POST",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Content-Type": "application/json",
    token: getState?.userSignin?.userInfo?.data?.token,
  };

  async function apply(body) {
    var requestOptions = {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
      redirect: "follow",
    };
     return fetch(process.env.REACT_APP_URL + urls[request_url],requestOptions)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
      return data
    });
  } 

  return {apply,data:data};
};

export default useDeletePost;