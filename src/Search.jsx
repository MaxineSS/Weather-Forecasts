import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { locationState } from './atoms.js';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import API_KEY from '../config.js';

// TODO: Create a component with a text box that accepts a zip code

export default function Search() {
  const [zipcode, setZipcode] = useState('');
  const [locationKey, setLocationKey] = useRecoilState(locationState);

  const handleInputChange = (e) => {
    setZipcode(e.target.value);
  }

  // TODO: fetch location key to given zipcode
  const fetchForecast = async () => {
    const url = `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${API_KEY}&q=${zipcode}`;
    try {
      const res = await fetch(url);
      const key = await res.json();
      setLocationKey(Object.assign({}, {key: key[0].Key, city: key[0].LocalizedName, state: key[0].AdministrativeArea.LocalizedName}))
    } catch(error) {
      console.log(error)
    }
  }
  return (
    <>
      <TextField
        label="Search with Zip Code"
        variant="outlined"
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        variant="contained"
        onClick={fetchForecast}>
        Submit
      </Button>
    </>
  )
}