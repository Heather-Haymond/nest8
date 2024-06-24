import React from 'react';
import './Footer.css';
import { Typography } from '@mui/material';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <footer>
      <Typography sx={{fontSize: "small", textAlign: "left"}}>&copy; Nest 8 all rights reserved</Typography>
    </footer>
    )
}

export default Footer;
