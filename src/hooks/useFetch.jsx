import { useState, useCallback } from 'react';
import { useApi } from '../context/ApiContext';

export function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { apiUrl } = useApi();

  const execute = useCallback(async (url, options = {}) => {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(apiUrl + url, {
        method: options.method || 'GET',
        headers,
        body: options ? JSON.stringify(options) : undefined,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
      return result; 
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [apiUrl]); 

  return { data, error, loading, execute };
}
