"use client";
import React from 'react';
import { CssBaseline, Typography } from '@material-ui/core';
import { MuiThemeProvider , createTheme} from '@material-ui/core/styles';
import AppAppBar from './component/appBar';
import Container from '@mui/material/Container';
import Header from './header'
import Footer from './Footer';
import CarAdvanceSearch from './component/advanceCarSearch';
import { StyledEngineProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333',
    },
    secondary: {
      main: '#666',
    },
  },
});

export default function Home() {
  
  return (
    <React.StrictMode>
    <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Container maxWidth="lg">
      <Typography variant='h3'>Check Care Review</Typography>
      <CarAdvanceSearch />
    </Container>
    <Footer />
  </MuiThemeProvider>
  </React.StrictMode>
  );
}
