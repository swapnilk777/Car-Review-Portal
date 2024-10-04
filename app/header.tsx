import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import Container from '@mui/material/Container';
import Link from 'next/link';

const Header = () => {
  return (
   
    <AppBar position="static">
         <Container maxWidth="lg">
        <Toolbar>
            <Typography variant="h6"  color="inherit">         
            <Link href="/dashboard">Car Review</Link>
            </Typography>
            <nav>
            <Button color="inherit" href="#">Home</Button>
            <Button color="inherit" href="#">About</Button>
            <Button color="inherit" href="#">Contact</Button>
            </nav>
        </Toolbar>
      </Container>
    </AppBar>
   
  );
};

export default Header;
