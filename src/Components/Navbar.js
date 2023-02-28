import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Navbar() {

  return (
    <AppBar position="static" color="default" sx={{ height: '150px', justifyContent: 'center' }}>
      <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            textAlign="center"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            WELCOME TO 3RE AGENCY!
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            WELCOME TO 3RE AGENCY!
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;