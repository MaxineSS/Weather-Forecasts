import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { location as locationAtom } from './atoms.js';
import API_KEY from '../config.js';
import Day from './Day.jsx';
import Location from './Location.jsx';
// import sampledata from '../sampleData.js';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Search() {
  const [zipcode, setZipcode] = useState('');
  const [locationKey, setLocationKey] = useRecoilState(locationAtom);

  const handleInputChange = (e) => {
    setZipcode(e.target.value);
  }
  const fetchForecast = async () => {
    const url = 'http://dataservice.accuweather.com';
    const location = `/locations/v1/postalcodes/search?apikey=${API_KEY}&q=${zipcode}`;
    const forecast = '/forecasts/v1/daily/5day/';

    try {
      const res1 = await fetch(`${url}${location}`);
      const key = await res1.json();
      setLocationKey(Object.assign({},
        { key: key[0].Key, city: key[0].LocalizedName, state: key[0].AdministrativeArea.LocalizedName, zip: zipcode }))
      try {
        const res2 = await fetch(`${url}${forecast}${key[0].Key}?apikey=${API_KEY}`);
        const list = await res2.json()
        return list;
      } catch (error) {
        console.log(error)
      }
    } finally {
      console.log('Finished fetching')
    }
  }
  const { data, status } = useQuery('forecasts', fetchForecast, {
    enabled: zipcode.length > 4
  })

  return (
    <>
      <Container>
        <Grid container direction="column" justifyContent="center" alignItems="center" rowSpacing={3}>
          <Grid item>
            <TextField
              value={zipcode}
              size="small"
              label="Search with Zip Code"
              variant="outlined"
              onChange={handleInputChange}
              sx={{ width: 300 }}
            />
            <span>    </span>
            {/* <Button
              type="submit"
              variant="contained"
              onClick={fetchForecast}>
              Submit
            </Button> */}
          </Grid>
          <Grid item>
            {status === 'success' && (<Location info={data.Headline}/>)}
          </Grid>
        </Grid>
          {status === 'loading' && (<div>Loading data....</div>)}
          {status === 'error' && (<div>Error fetching data....</div>)}
          {status === 'success' && (
          <Grid container spacing={2} justifyContent="center" alignItems="start">
                {
                  data.DailyForecasts.map((day, i) => ((
                    <Grid item key={i} xs={12} sm={6} md={2}>
                      <Day day={day} i={i} />
                    </Grid>
                  )))
                }
          </Grid>
          )}
      </Container>
    </>
  )
}

