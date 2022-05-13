import React from 'react'
import { Container, Typography, Grid} from '@mui/material/'

const languagesArray = ["Javascript", "CSS", "HTML", "Python", "C++", "Java", "Bash"];
const technologiesArray = ["React", "Moodle", "Google Cloud", "Figma", "Mustache", "Bootstrap", "Material-UI", "Git", "JIRA", "MongoDB", "Express.js", "Three.js", "Node.js", "AutoCAD", "Adobe Cloud Suite"];

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
                    <Typography variant="p" align="center">As of now, I have experience working mainly as a Front-End Developer, but have also dabbled in Project Management. My hobbies including reading manga, playing video games, playing Go, and editing images and videos!</Typography>
                </Grid>
            </Grid>
           <Grid container spacing={6} justifyContent="center">
               <Grid item xs={3}>
                    <Typography variant="h5">Personal Info:</Typography>
                    <Typography variant="p">Full Name:</Typography> <br />
                    <Typography variant="p" className="sub-item">Eric Jiahong Lin</Typography> <br />
                    <Typography variant="p">Birth Date:</Typography> <br />
                    <Typography variant="p" className="sub-item">June 27, 2003</Typography> <br />
                    <Typography variant="p">Email:</Typography> <br />
                    <Typography variant="p" className="sub-item">e54lin@uwaterloo.ca</Typography> <br />
                    <Typography variant="p">Phone Number:</Typography> <br />
                    <Typography variant="p" className="sub-item">(647) 983-8627</Typography> <br />
               </Grid>
               <Grid item xs={3}>
                    <Typography variant="h5">Education:</Typography>
                    <Typography variant="p">University of Waterloo</Typography> <br />
                    <Typography variant="p">Bachelor of Applied Sciences</Typography> <br />
                    <Typography variant="p">Systems Design Engineering</Typography> <br />
                    <Typography variant="p">Sep. 2021 - Apr. 2026</Typography> <br />
               </Grid>
           </Grid>
        </Container>
    )
}