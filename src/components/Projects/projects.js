import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const projects = [
  {
    title: "VAST MC2 Challenge",
    description: "Solution to the 2015 VAST MC2 by exploring the in-app communication data collected during the Scott Jones celebration at the DinoFun World. Used five types of visualization techniques to answer the questions asked in the challenge. The system also provides more focused and detailed views of these visualizations by filtering on time and locations in the park.",
    githubRepoLink: "https://github.com/Somya-Bansal/vast-mc2-challenge-2015",
    demoLink: "https://somya-bansal.github.io/vast-mc2-challenge-2015/"
  },
  {
    title: "VAST MC2 Challenge",
    description: "",
    githubRepoLink: "https://github.com/Somya-Bansal/vast-mc2-challenge-2015",
    demoLink: "https://somya-bansal.github.io/vast-mc2-challenge-2015/"
  },
]
const theme = createTheme();

export default function Projects() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
          
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
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Somya Bansal
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Hi, I'm Somya. I am a Computer Science graduate student at Arizona State University. This is a collection of projects I have worked on.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* TODO: Add icons to these buttons */}
              <Button variant="contained">Resume</Button>
              <Button href="https://github.com/Somya-Bansal" variant="outlined" target="_blank">Github</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={8}>
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton aria-label="add to favorites" href={project.githubRepoLink} target="_blank">
                      <GitHubIcon />
                    </IconButton>

                    <IconButton aria-label="add to favorites" href={project.demoLink} target="_blank">
                      <PlayCircleIcon />
                    </IconButton>

                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}