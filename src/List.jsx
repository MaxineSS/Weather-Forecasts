import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { forecastState, locationState } from './atoms.js';

// TODO: fetch 10days forecast data with API
// TODO: Display the data returned as a 7 day forecast

export default function List() {
  const [forecast, setForecast] = useRecoilState(forecastState);
  const key = useRecoilValue(locationState);
  console.log(key)
  return (
    <div>
      list
    </div>
  )
}