import React from 'react';
// import {useStyles} from './styles'
import Grid from '@material-ui/core/Grid';
import './AboutPage.css';

function AboutPage(){

    // const classes = useStyles();

    return (
        <div>
            <Grid container spacing={0} justify="center">
                <h2 className="aboutHeader">About Us </h2>
            </Grid>

            <Grid container spacing={0} justify="center">
                    
                <h5 className="HomePageAbout" >Climate change harms mental wellbeing in a number of ways. From stress, to relationship damage caused by
                separation and displacement, the psychological impacts of climate change can be harsh. We are a group of undergraduates from NUS that aims
                to raise awareness with regards to Climate Depression and its manifestations. 
                <br></br>
                <br></br>
                </h5>

            
            </Grid>

            <Grid container spacing={0} justify="center">
                <h2 className="aboutHeader">What is Climate Depression?</h2>
            </Grid>

            <Grid container spacing={0} justify="center">
                    
                <h5 className="HomePageAbout" >
                Climate depression is a sense of despairing futility from the perceived 
                prospects of climate change. Climate depression takes two forms: adaptive 
                and mal-adaptive anxiety (Morris, 2019). While the adaptive form is a healthy 
                response that works towards the source of worry, the mal-adaptive anxiety stems 
                from the uncertainties of climate change (Dugent, 2019), inflicting uncontrollable 
                chronic stress. To identify the nature of climate depression, people need to 
                express their experience (Ojala, 2013).
                <br></br>
                <br></br>
                </h5>

            
            </Grid>

            <Grid container spacing={0} justify="center">
                <h2 className="aboutHeader">How can I cope with it?</h2>
            </Grid>

            <Grid container spacing={0} justify="center">
                    
                <h5 className="HomePageAbout" >
                <br></br>
                <br></br>
                We are anticipating about 150 participants for the hackathon, consisting of teams of 2-4 people. Team members need not be from the same school. 
                </h5>

            
            </Grid>



        </div>
    )

}

export default AboutPage; 