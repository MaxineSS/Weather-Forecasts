import React from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Search from './Search.jsx'

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Container>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <div>
              forecast
              </div>
            </Grid>
            <Grid item xs={12}>
              <Search />
            </Grid>
          </Grid>
        </Container>
        <ReactQueryDevtools initialIsOpen />
      </RecoilRoot>
    </QueryClientProvider>
  )
}