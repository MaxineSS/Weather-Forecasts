import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { locationState } from './atoms.js';
import { formatData } from './helper.js';
import sampledata from '../sampleData.js';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import API_KEY from '../config.js';
import Day from './Day.jsx';

// TODO: Create a component with a text box that accepts a zip code

export default function Search() {
  const [zipcode, setZipcode] = useState('');
  const [locationKey, setLocationKey] = useRecoilState(locationState);

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
      setLocationKey(Object.assign({}, { key: key[0].Key, city: key[0].LocalizedName, state: key[0].AdministrativeArea.LocalizedName }))
      try {
        const res2 = await fetch(`${url}${forecast}${key[0].Key}?apikey=${API_KEY}`);
        const list = await res2.json()
        return list;
      } catch (error) {
        console.log(error)
      }
    } finally {
      console.log('finished fetching')
    }
  }
  const { data, status } = useQuery('forecasts', fetchForecast, {
    enabled: !!locationKey.key
  })

  return (
    <>
      <Container>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Grid item>
            <TextField
              label="Search with Zip Code"
              variant="outlined"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              onClick={fetchForecast}>
              Submit
            </Button>
          </Grid>
          <Grid item>
              <Typography gutterBottom variant="h6" component="div">
                {sampledata.Headline.Text}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                {formatData(sampledata.Headline.EffectiveDate)}
              </Typography>
          </Grid>
          <div>
              {
                sampledata.DailyForecasts.map((day, i) => ((
                  <Grid item key={i} xs={12} md={6} lg={4}>
                    <Day day={day} />
                  </Grid>
                )))
              }
          </div>
          {/* {status === 'loading' && (<div>loading data...</div>)}
          {status === 'error' && (<div>error fetching data...</div>)}
          {status === 'success' && (
          <>
            <Grid item>
                <Typography gutterBottom variant="h6" component="div">
                  {data.Headline.EffectiveDate}
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {data.Headline.EffectiveDate}
                </Typography>
            </Grid>
            <div>
                {
                  data.DailyForecasts.map((day, i) => ((
                    <Grid item key={i} xs={12} md={6} lg={4}>
                      <Day day={day} />
                    </Grid>
                  )))
                }
            </div>
          </>
          )} */}
        </Grid>
      </Container>
    </>
  )
}