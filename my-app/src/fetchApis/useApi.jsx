import { useState } from "react";
import axios from "axios";

function useApi(baseUrl) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // GET all
  const getData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await axios.get(baseUrl);
      setData(res.data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  // POST new
  const postData = async (payload) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await axios.post(baseUrl, payload);
      setData((prev) => (Array.isArray(prev) ? [...prev, res.data] : res.data));
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  // DELETE by id
  const deleteData = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      let DeletedItem = await axios.delete(`${baseUrl}/${id}`);
      setData(DeletedItem);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, getData, postData, deleteData };
}

export default useApi;
