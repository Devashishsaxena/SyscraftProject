import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useGetPosts = (request) => {

  request.url=request.url?request.url:"";
  request.data=request.data?request.data:{};
  request.onLoad=request.onLoad?request.onLoad:"true";
  console.log(request.url,'get_checkout_info');
  const [data, setData] = useState(null);
  const [isLoading,setLoading]= useState(true);
  const getState = useSelector((state) => state);
  const urls={
    "front": "/front",
    "service_details": "/front/service/details",
    "project_categories": "/customer/project/categories",
    "customer_projects": "/customer/projects",
    "customer_project_detail": "/customer/project/details",

    "message_list": "/customer/chat/messagelist",
    "project_details": "/front/project/details",
    "get_checkout_info" : "/customer/proposal/get_checkout_info",
    "get_user_profile": "/customer/proposal/get_user_profile",
    "addresses": "/customer/profile/address",
    "address_detail": "/customer/profile/address/detail",
    "profile_detail": "/customer/profile",
    // vendor side api
    "vendor_message_list": "/vendor/chat/messagelist",
    "vendor_proposal_list": "/vendor/proposals",
    "vendor_service_list": "/vendor/services",
    "vendor_service_detail": "/vendor/service/detail",
  }
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Content-Type": "application/json",
    token: getState?.userSignin?.userInfo?.data?.token,
  };
  var requestOptions = {
    method: "POST",
    body: JSON.stringify(request.data),
    headers: headers,
    redirect: "follow",
  };
  const getdata=(request_data)=>{
    console.log("getdata",request.url);
    requestOptions.body=JSON.stringify(request_data)
    return fetch(process.env.REACT_APP_URL + urls[request.url],requestOptions)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
          return data
        });
  }
  useEffect(() => {
    console.log(request.onLoad,'aiuyy')
    if(request.onLoad=="false"){
      console.log("onloadfasle",'tt');
        setData({})
    } else{
      console.log("onloadtrue",request.url);

        fetch(process.env.REACT_APP_URL + urls[request.url],requestOptions)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        });
         

    }


  }, [request.onLoad]);

  return {data, isLoading,getdata};
};

export default useGetPosts;