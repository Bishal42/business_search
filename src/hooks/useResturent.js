import React, { useState } from "react";
import yelp from "../api/yelp";

const UseResturent = () => {
  const [result, setResult] = useState({
    data: null,
    error: null,
    loading: false,
  });
  const searchResturent = async (term) => {
    setResult({
      data: null,
      error: null,
      loading: true,
    });
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 8,
          term: term.term,
          location: "san joes",
        },
      });

      setResult({
        data: response.data.businesses,
        error: null,
        loading: false,
      });
    } catch (error) {
      setResult({
        data: null,
        error: " error",
        loading: false,
      });
    }
  };
  return [result, searchResturent];
};

export default UseResturent;
