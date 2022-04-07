import React from 'react';
import { atom, RecoilRoot } from 'recoil';
import { useQuery } from 'react-query';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Search from './Search.jsx'
import List from './List.jsx'


const id = atom({
  key: `items${id}`,
  default: []
})

export default function App() {
  return (
    <RecoilRoot>
      <Container>
        <Grid container direction="column" justifyContent="center">
          <Grid item xs={12}>
            <div>
            forecast
            </div>
          </Grid>
          <Grid item xs={12}>
            <Search />
          </Grid>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </Container>
    </RecoilRoot>
  )
}