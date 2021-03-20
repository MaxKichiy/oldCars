import { useState, useEffect } from 'react';

import axios from 'axios';
const baseURL = 'https://dummy-hooks.firebaseio.com/'

export const useFetch = url => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(baseURL + url +'.json');

        setData(response.data);
      } catch (error) {
        setErrors(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, errors, isLoading };
};