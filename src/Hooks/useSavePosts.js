import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useSavePosts = (request_url="") => {

  const [data, setData] = useState(null);
  const [request_data, setRequestData] = useState(null);
  const getState = useSelector((state) => state);
  const urls={
    "proposal_request": "/customer/proposal/request",
    "change_status": "/customer/proposal/change_line_item_status",
    "accept_line_items": "/customer/proposal/accept_line_items",
    "accept_proposal": "/customer/proposal/accept_proposal",
    "send_message": "/customer/chat/send_message",
    "add_project":"/customer/project/add",
    "update_project":"/customer/project/update",
    "proposal_update_request":"/customer/proposal/update-request",
    "complete_project":"/customer/proposal/complete_project",

    "add_address":"/customer/profile/address/add",
    "update_address":"/customer/profile/address/update",  
    "profile_update": "/customer/profile/update",

    "pay":"/customer/proposal/pay",
    "create_source": "/customer/proposal/create_source",

    // vendor side api
    "vendor_send_message": "/vendor/chat/send_message",
    "vendor_service_add": "/vendor/service/add",
    "vendor_service_update": "/vendor/service/update",
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

  async function sendData(body) {
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

  return {sendData,data:data};
};

export default useSavePosts;