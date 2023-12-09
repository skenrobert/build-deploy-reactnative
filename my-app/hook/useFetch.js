import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
      method: 'GET',
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      headers: {
        'X-RapidAPI-Key': '3fc3d35965mshbd6ba9e36eec150p118711jsna0dbc7f26866',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      },
      params: { ...query},
    };

    const fetchData = async () => {
      setIsLoading(true);
      
      try {
        const response = await axios.request(options);
        setData(response.data.data);
        // console.log(response.data.data[0]);
        setIsLoading(false);

      } catch (error) {
      	console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    useEffect(() => {
      fetchData();
    }, []);

    const refetch = () => {
      setIsLoading(true);
      fetchData();
    };

    return { data, isLoading, error, refetch };

    };

    export default useFetch;