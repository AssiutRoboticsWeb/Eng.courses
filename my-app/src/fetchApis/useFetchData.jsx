import { useState, useEffect } from "react";
import axios from "axios";

function useFetchData(url) {
  const [fetchedData, setFetchedData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setFetchError(null);
    setFetchedData(null);

    axios
      .get(url)
      .then((response) => setFetchedData(response.data.data))
      .catch((error) => setFetchError(error.message))
      .finally(() => setIsLoading(false));
  }, [url]);
  return { fetchedData, isLoading, fetchError };
}

export default useFetchData;
