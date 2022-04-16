import React from 'react';
import { LinkedIn, Email, GitHub, Menu} from '@mui/icons-material/';
import { Grid, CssBaseline, Tooltip, Typography } from '@mui/material/';


export default function Navbar () {
    return (
        <header>
            <CssBaseline />
            <Grid container alignItems="center" justifyContent="center" spacing={2}>
                <Grid item xs={1} align="center">
                    <Menu fontSize="large"/>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="h2" align="center" >Eric Lin</Typography>
                </Grid>
                <Grid item xs={1} align="center" className="navbar-icons">
                    <Tooltip arrow title="ericlinjh@hotmail.com">
                        <a href="mailto: ericlinjh@hotmail.com">
                            <Email fontSize="large" />
                        </a>
                    </Tooltip>
                    <Tooltip arrow title="linkedin.com/in/ericlinjh">
                        <a href="https://www.linkedin.com/in/ericlinjh/">
                            <LinkedIn fontSize="large"/>
                        </a>
                    </Tooltip>
                    <Tooltip arrow title="github.com/ericlinjh">
                        <a href="https://github.com/ericlinjh">
                            <GitHub fontSize="large" />
                        </a>            
                    </Tooltip>
        
                </Grid>
            </Grid>
        </header>
    );
}