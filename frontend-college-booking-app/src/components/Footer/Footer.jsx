import React from 'react';
import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2b2d42' }}>
      <Toolbar>
        <Box display="flex" flexGrow={1} flexDirection="column" alignItems="center">
          <Typography variant="h6" color="inherit" component="div">
            Footer Title
          </Typography>
          <Typography variant="body2" color="inherit">
            Address Line 1, Address Line 2, City, Country
          </Typography>
          <Typography variant="body2" color="inherit">
            Phone: +1 123-456-7890
          </Typography>
          <Typography variant="body2" color="inherit">
            Email: example@example.com
          </Typography>
        </Box>
        <Box display="flex" gap={2}>
          <Link href="#" color="inherit">
            About Us
          </Link>
          <Link href="#" color="inherit">
            Contact Us
          </Link>
          <Link href="#" color="inherit">
            Privacy Policy
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
