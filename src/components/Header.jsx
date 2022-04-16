import React from 'react';
import {Typography, Container, Grid, Button} from '@mui/material'

export default function Header () {
    return (
        <Container>
            <Typography variant="h3" align="center">hi, my name is</Typography>
            <Typography variant="h1" align="center">eric lin</Typography>
            <Grid container spacing={3} justifyContent="center">
                <Grid item>
                    <Button variant="contained">Résumé</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">Projects</Button>
                </Grid>
            </Grid>
        </Container>
    )
}