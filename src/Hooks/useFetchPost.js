import { useState, useEffect } from "react";

function useFetchPost(url, options, headerData) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const fetchByPost = async () => {
    var requestOptions = {
      method: "POST",
      body: options,
      headers: headerData,
      redirect: "follow",
    };
    fetch(url, requestOptions)
      .then((result) => result.json())
      .then((result) => {
        //result.data=[];
        setIsLoading(false)
        setData(result)
      })
      .catch((error) => console.log("error", error));
  };
  return { response, error, isLoading, fetchByPost, data };
}
export default useFetchPost;
