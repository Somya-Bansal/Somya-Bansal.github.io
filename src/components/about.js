import DownloadIcon from '@mui/icons-material/Download';
import resume from "../resources/Resume_SomyaBansal.pdf";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Container, Link, Typography } from '@mui/material';

export default function About() {
    return (

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
                    <Button component={Link} variant="contained" startIcon={<DownloadIcon />} href={resume} download="SomyaBansal_resume.pdf">
                        Resume
                    </Button>
                    <Button href="https://github.com/Somya-Bansal" variant="outlined" target="_blank" startIcon={<GitHubIcon />}>
                        Github
                    </Button>
                </Stack>
            </Container>
        </Box>
    )
}