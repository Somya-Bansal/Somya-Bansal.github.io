import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Button, Container, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import dv_project from "../images/dv_project.png";
import hci_project from "../images/hci_project.png";
import blog_project from "../images/blog_project.png";

const projects = [
    {
      title: "VAST MC2 Challenge",
      description: "Solution to the 2015 VAST MC2 by exploring the in-app communication data collected during the Scott Jones celebration at the DinoFun World. Used five types of visualization techniques to answer the questions asked in the challenge. The system also provides more focused and detailed views of these visualizations by filtering on time and locations in the park.",
      githubRepoLink: "https://github.com/Somya-Bansal/vast-mc2-challenge-2015",
      demoLink: "https://somya-bansal.github.io/vast-mc2-challenge-2015/",
      image: dv_project
    },
    {
      title: "Redesigning Zara.com for better UX",
      description: "Investigating the e-commerce website zara.com with the goal of improving the user experience. The redesign makes it simpler for users to navigate through the website, reduces the number of page changes made by the user in the checkout flow. It also cuts down the total time spent on the task and makes the overall shopping experience on zara.com much simpler.",
      githubRepoLink: "https://omiuvv.axshare.com/home.html",
      demoLink: "https://omiuvv.axshare.com/home.html",
      image: hci_project
    },
    {
      title: "Designed a blogger with React",
      description: "This was my first React project where I designed and implemented a blog publishing website. It is a complete system with Firebase integration for database and is hosted on Heroku.",
      githubRepoLink: "https://github.com/Somya-Bansal/blog-with-react-and-firebase",
      demoLink: "https://blog-with-react-firebase.herokuapp.com/",
      image: blog_project
    },
  ]

export default function Projects() {
    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={8}>
                {projects.map((project, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                        <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                image={project.image}
                                height="240"
                                alt="project_peek_image"
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
                                <Button href={project.githubRepoLink} target="_blank" variant="outlined" startIcon={<GitHubIcon />}>
                                    Github
                                </Button>

                                <Button href={project.demoLink} target="_blank" variant="outlined" startIcon={<PlayCircleIcon />}>
                                    Live Demo
                                </Button>

                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
