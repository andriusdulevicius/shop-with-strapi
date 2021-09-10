import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';

export default function useStrapi(urlEnd, token = null) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const headersObj = useMemo(() => {
    return token
      ? {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : null;
  }, [token]);

  useEffect(() => {
    let isCancelled = false;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_STRAPI_URL}/${urlEnd}`, headersObj);
        if (!isCancelled) {
          setData(data);
        }
      } catch (error) {
        if (!isCancelled) {
          setError('Something went wrong');
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, [urlEnd, headersObj]);
  return [data, isLoading, error];
}
