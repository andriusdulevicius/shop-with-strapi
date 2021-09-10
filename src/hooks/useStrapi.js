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

      if (!isCancelled) {
        try {
          const { data } = await axios.get(`${process.env.REACT_APP_STRAPI_URL}/${urlEnd}`, headersObj);

          setData(data);
        } catch (error) {
          setError('Something went wrong');
        } finally {
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
