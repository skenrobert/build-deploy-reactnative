import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { Text, SafeAreaView } from 'react-native'
import axios from 'axios'

import { ScreenHeaderBtn, NearbyJobCard } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import styles from '../../styles/search'

const JobSearch = () => {

  const params = useSearchParams();
  const router = useRouter()

  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1); 

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([])

    try {
        const options = {
            method: "GET",
            url: `https://jsearch.p.rapidapi.com/search`,
            headers: {
                "X-RapidAPI-Key": '',
                "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
            },
            params: {
                query: params.id,
                page: page.toString(),
            },
        };

        const response = await axios.request(options);
        setSearchResult(response.data.data);
    } catch (error) {
        setSearchError(error);
        console.log(error);
    } finally {
        setSearchLoader(false);
    }
};

const handlePagination = (direction) => {
  if (direction === 'left' && page > 1) {
      setPage(page - 1)
      handleSearch()
  } else if (direction === 'right') {
      setPage(page + 1)
      handleSearch()
  }
}


  return (
    <div>[id]</div>
  )
}

export default JobSearch;