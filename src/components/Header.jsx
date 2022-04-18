import { React, useEffect } from 'react';
import {Typography, Container, Grid, Button} from '@mui/material'

function TypeWriter(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

TypeWriter.prototype.type = function() {
    const current = this.wordIndex % this.words.length;

    const fullTxt = this.words[current];

    if(this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="typewriter-curr">${this.txt}</span>`

    let typeSpeed = 75;

    if(this.isDeleting) {
        typeSpeed /= 2;
    }

    if(!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 75;
    }

    setTimeout(() => this.type(), typeSpeed)
}

function init() {
    const txtElement = document.querySelector('.typewriter-text');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
}

export default function Header () {
    useEffect(() => {
        init();
    });
    return (
        <Container>
            <Typography variant="h3" align="center">hi, my name is</Typography>
            <Typography variant="h1" align="center">eric lin</Typography>
            <br />
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Typography variant="h3" align="center">I am a: </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h3" align="center" className="typewriter-text" data-wait="3000" data-words='["Systems Design Engineering Student", "Front End Developer", "Video Editor", "Designer"]'></Typography>
                </Grid>
            </Grid>
            <br />
            <hr />
            <br />
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