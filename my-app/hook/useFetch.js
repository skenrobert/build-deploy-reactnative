import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from '@env'; 

const rapidApikey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
      method: 'GET',
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      headers: {
        'X-RapidAPI-Key': rapidApikey,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      },
      params: { ...query
        // query: 'Python developer in Texas, USA',
        // page: '1',
        // num_pages: '1'
      }
    };

    const fetchData = async () => {
      setIsLoading(true);

      try {
    	  const response = await axios.request(options);
    	  // console.log(response.data);
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
      	console.error(error);
        setError(error);
        alert('there is an error');
      } finally {
        setIsLoading(false);
      }
    }

    useEffect(() => {
      fetchData();
    }, [endpoint, query]);

    const refetch = () => {
      setIsLoading(true);
      fetchData();
    }

    return { data, isLoading, error, refetch };

    }
