import React from 'react'
import { Container, Typography, Grid} from '@mui/material/'

export default function Skills() {
    return(
        <Container>
            <Typography variant="h5" align="center">Skills</Typography>
            <Typography variant="h4" align="center">These are the languages I can code in</Typography>
            <Grid container spacing={6} className="skills-images" sx={{ justifyContent: "center" }}>
                <Grid item xs={2}>
                    <img src="skills/html.png" alt="HTML"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="skills/javascript.png" alt="Javascript"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="skills/css.png" alt="CSS"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="skills/python.png" alt="Python"/>
                </Grid>
            </Grid>
            <Grid container spacing={6} className="skills-images" sx={{ justifyContent: "center"}}>
                <Grid item xs={2}>
                    <img src="skills/c++.png" alt="C++"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="skills/java.png" alt="Java"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="skills/bash.png" alt="Bash"/>
                </Grid>
            </Grid>
            <Typography variant="h4" align="center">and these are the technologies I can use</Typography>
            <Grid container spacing={6} className="skills-images" sx={{ justifyContent: "center"}}>
                <Grid item xs={2}>
                    <img src="technologies/react.png" alt="React"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="technologies/moodle.png" alt="Moodle"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="technologies/googlecloud.png" alt="Google Cloud"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="technologies/figma.png" alt="Figma"/>
                </Grid>
            </Grid>
            <Grid container spacing={6} className="skills-images" sx={{ justifyContent: "center"}}>
                <Grid item xs={2}>
                    <img src="technologies/bootstrap.png" alt="Bootstrap"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="technologies/materialui.png" alt="Material-UI"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="technologies/git.png" alt="Git"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="technologies/jira.png" alt="JIRA"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="technologies/expressjs.png" alt="Express.js"/>
                </Grid>
            </Grid>
            <Grid container spacing={6} className="skills-images" sx={{ justifyContent: "center"}}>
                <Grid item xs={2}>
                    <img src="technologies/mongodb.png" alt="MongoDB"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="technologies/nodejs.png" alt="Node.js"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="technologies/threejs.png" alt="Three.js"/>
                </Grid>
                <Grid item xs={2}>
                    <img src="technologies/adobecreativesuite.png" alt="Adobe Creative Suite"/>
                </Grid>
            </Grid>
        </Container>
    )
}