import React from 'react'
import { Container, Typography, Grid, Stack } from '@mui/material/'

export default function AboutMe() {
    return(
        <Container>
            <Typography variant="h5" align="center">About Me</Typography>
            <Typography variant="h4" align="center">Let me tell you about myself</Typography>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={2} align="right" sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <Typography variant="p" align="center" >Hello! My name is Eric Lin and I am a Systems Design Engineering Student currently in my 1B term. My passions lie in health, especially neurology, in which I hope to build a career as a Product Manager after I graduate.</Typography>
                </Grid>
                <Grid item xs={2} className="grid-flex" sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                    <img src="eric-picture.png" alt="Picture of Me!" className="profile-picture"/>
                </Grid>
                <Grid item xs={2} align="left" sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                    <Typography variant="p" align="center">As of now, I have experience working mainly as a Front-End Developer, but have also dabbled in Project Management. My hobbies including reading Manga, playing video games, and editing images and videos!</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={6} align="left">
                    <Typography variant="h5">Skills:</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={6}>
                    <Stack direction="row" spacing={5}>
                        <Typography variant="p">- Javascript</Typography>
                        <Typography variant="p">- CSS</Typography>
                        <Typography variant="p">- Python</Typography>
                        <Typography variant="p">- C++</Typography>
                        <Typography variant="p">- Java</Typography>
                        <Typography variant="p">- Bash</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}