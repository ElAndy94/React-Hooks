import { useState, useEffect } from "react";

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  //   fetch("https://swapi.co/api/people")
  useEffect(() => {
    setIsLoading(true);
    console.log("sending http");
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch.");
        }
        return res.json();
      })
      .then(data => {
        setIsLoading(false);
        setFetchedData(data);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, dependencies);

  return [isLoading, fetchedData];
};
