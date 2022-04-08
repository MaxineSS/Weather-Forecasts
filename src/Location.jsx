import React from 'react';
import { useRecoilValue } from 'recoil';
import { location as locationAtom } from './atoms.js';
import { formatData } from './helper.js';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';


export default function Location({info}) {
  const { city, state } = useRecoilValue(locationAtom)

  const location = (
    <div>
      <b>{city}</b>, {state}
    </div>
  );
  const headline = (
    <div style={{ textDecoration: 'underline'}}>
     {formatData(info.EffectiveDate)} <b>{info.Text}</b>
    </div>
  )

  return (
    <Grid container sx={{ width: '100%', maxWidth: 800, p: 2, mb: 3 }}>
      <Grid item color="text.secondary">
        {location} {headline}
      </Grid>
    </Grid>
  )
}
