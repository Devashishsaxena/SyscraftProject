import { useState, useEffect } from "react";

function usePost(url, options) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setIsLoading(true);
  //       try {
  //         const res = await fetch(url, {
  //           method: "POST",
  //           ...options,
  //         });
  //         const data = await res.json();
  //         setResponse(data);
  //       } catch (error) {
  //         setError(error);
  //       }
  //       setIsLoading(false);
  //     };

  //     fetchData();
  //   }, [url]);

  const fetchByPost = async () => {
    // var requestOptions = {
    //   method: "POST",
    //   body: options,
    //   headers: headerData,
    //   redirect: "follow",
    // };
    fetch(url, options)
      .then((result) => result.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
    console.log(options);
  };
  return { response, error, isLoading, fetchByPost, data };
}
export default usePost;
