import React from 'react';
import { Box, Card, CardActions, Typography } from '@material-ui/core';
import './Articles.css';
import {useStyles} from './styles.js'
import Grid from '@material-ui/core/Grid';
import polarBear from './images/polar_bear.jpg';
import glacier from './images/glacier.jpg';
import forest from './images/forest.jpg';


function ArticlesPage(){

    const classes = useStyles();

    return (
        <div className={classes.bgImg}>

            <Grid container spacing={0} >

                <Grid item xs={12} justify="center" >

            

                    <h3 className="eventOverviewHeaders">Climate News</h3>

                    <hr/>

                    <a href="https://www.rnz.co.nz/news/national/434686/ecotherapy-mental-health-and-the-climate-crisis" target="_blank" rel="noopener noreferrer">
                        <div class="content">

                            <div className="imgContent" justify="center">
                                <img className={classes.imgClass} src={polarBear} />
                            </div>

                            <div class="imgText">
                                <h5 class="imgTextChildDate">February 4, 2021</h5>
                                <h5 class="imgTextChild">Ecotherapy: Mental health and the climate crisis</h5>
                                <h5 class="imgTextChildSub">More people are seeking counselling over their concerns about the looming climate crisis, a practice offering the “ecotherapy” services says.</h5>
                            </div>
                        </div>
                    </a>

                    <hr/>

                    <a href="https://climate.nasa.gov/news/3062/warming-seas-are-accelerating-greenlands-glacier-retreat/" target="_blank" rel="noopener noreferrer">
                        <div class="content">

                            <div className="imgContent" justify="center">
                                <img className={classes.imgClass} src={glacier} />
                            </div>

                            <div class="imgText">
                                <h5 class="imgTextChildDate">January 25, 2021</h5>
                                <h5 class="imgTextChild">Warming Seas Are Accelerating Greenland's Glacier Retreat</h5>
                                <h5 class="imgTextChildSub">Greenland’s melting glaciers, which plunge into Arctic waters via steep-sided inlets, or fjords, are among the main contributors to global sea level rise in response to climate change.</h5>
                            </div>
                        </div>
                    </a>

                    <hr/>

                    <a href="https://climate.nasa.gov/news/3057/land-ecosystems-are-becoming-less-efficient-at-absorbing-carbon-dioxide/" target="_blank" rel="noopener noreferrer">
                        <div class="content">

                            <div className="imgContent" justify="center">
                                <img className={classes.imgClass} src={forest} />
                            </div>

                            <div class="imgText">
                                <h5 class="imgTextChildDate">December 21, 2020</h5>
                                <h5 class="imgTextChild">Land Ecosystems Are Becoming Less Efficient at Absorbing Carbon Dioxide</h5>
                                <h5 class="imgTextChildSub">As levels of CO2 in the atmosphere increase, 86% of land ecosystems globally are becoming progressively less efficient at absorbing it.</h5>
                            </div>
                        </div>
                    </a>

                    <hr/>


    
                </Grid>
            </Grid>
        </div>
    )

}

export default ArticlesPage; 