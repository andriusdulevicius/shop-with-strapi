import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useStrapi(urlEnd) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_STRAPI_URL}/${urlEnd}`);
        setData(data);
      } catch (error) {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [urlEnd]);

  return [data, isLoading, error];
}
