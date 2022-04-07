import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

// TODO: Create a component with a text box that accepts a zip code

export default function Search() {
  const [zipcode, setZipcode] = useState('');

  const handleInputChange = (e) => {
    setZipcode(e.target.value);
  }

  return (
    <>
      <TextField
        label="Search with Zip Code"
        variant="outlined"
        onChange={handleInputChange}
      />
    </>
  )
}