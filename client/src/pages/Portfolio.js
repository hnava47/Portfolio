import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import logo from '../images/logo.svg';

import {
    AppBar,
    Contact,
    Drawer,
    Headshot,
    Introduction,
    mainListItems,
    secondaryListItems,
    Project,
    Skills
} from '../components'

const mdTheme = createTheme();

export const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position='absolute'
          open={open}
        >
          <Toolbar
            sx={{
              pr: '24px',
            }}
          >
            <IconButton
              id="drawerButton"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={9} lg={7} id='Introduction'>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 510,
                  }}
                >
                  <Introduction />
                </Paper>
              </Grid>
              <Grid item xs={12} md={3} lg={5} align="center">
                <Headshot />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 350,
                  }}
                >
                  <img src={logo} className="App-logo" alt='Animated desk'/>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6} id='Skills'>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 350,
                  }}
                >
                  <Skills />
                </Paper>
              </Grid>
              <Grid item xs={12} id='Projects'>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Project />
                </Paper>
              </Grid>
              <Grid item xs={12} id='Contact'>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Contact />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Portfolio;
