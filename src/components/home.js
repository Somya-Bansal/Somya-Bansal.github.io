import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import About from "./about";
import Projects from './projects';
import Footer from './footer';

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

          <Typography variant="h6" color="inherit" noWrap>
            Somya Bansal
          </Typography>
          <nav>
            <Button
              variant="button"
              color="text.primary"
            // href="#"
            // sx={{ my: 1, mx: 1.5 }}
            >
              About Me
            </Button>
            <Button
              variant="button"
              color="text.primary"
            // href="#"
            // sx={{ my: 1, mx: 1.5 }}
            >
              Projects
            </Button>
            <Button
              variant="button"
              color="text.primary"
            // href="#"
            // sx={{ my: 1, mx: 1.5 }}
            >
              Contact
            </Button>
          </nav>

        </Toolbar>
      </AppBar>
      <main>
        <About></About>
        <Projects></Projects>
      </main>
      <Footer></Footer>
    </ThemeProvider>
  );
}