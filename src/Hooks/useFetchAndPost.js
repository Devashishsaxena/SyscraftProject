import { useState, useEffect } from "react";

function useFetchAndPost(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const controller = new AbortController();
  const signal = controller.signal;

  async function fetchData() {
    try {
      const response = await fetch(url, { signal });
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      if (error.name === "AbortError") {
        // console.log("Fetch cancelled");
      } else {
        setError(error);
      }
      setLoading(false);
    }
  }

  async function postData(body) {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
        signal,
      });
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      if (error.name === "AbortError") {
        // console.log("Fetch cancelled");
      } else {
        setError(error);
      }
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();

    return () => controller.abort();
  }, [controller]);

  return { data, error, loading, postData };
}

export default useFetchAndPost;
