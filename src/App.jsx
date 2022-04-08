import React from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Search from './Search.jsx'

const queryClient = new QueryClient();
const theme = createTheme({
  palette: {
    text: {
      primary: '#1f1f1d',
      secondary: '#383835'
    },
    background: {
      primary: '#cfcf13'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #cfcf13 10%, #FF8E53 90%)'
        }
      }
    }
  }
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container sx={{ mt: 10 }}>
            <Grid container
              direction="column"
              justifyContent="center"
              alignItems="center"
              rowSpacing={3}>
            <Grid item xs={12}>
                <Typography
                  align="center"
                  variant="h2"
                  component="div"
                  gutterBottom
                  color="text.primary"
                  sx={{ fontWeight: 'bold' }}>
                  5 days Forecast
                </Typography>
            </Grid>
            <Grid item xs={12}>
              <Search />
            </Grid>
          </Grid>
          </Container>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen />
      </RecoilRoot>
    </QueryClientProvider>
  )
}