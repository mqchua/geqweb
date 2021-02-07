import React from 'react';
import { Box, Card, CardActions, Typography } from '@material-ui/core';
import './Articles.css';
import {useStyles} from './styles.js'
import Grid from '@material-ui/core/Grid';
import polarBear from './images/polar_bear.jpg';


function ArticlesPage(){

    const classes = useStyles();

    return (
        <div className={classes.bgImg}>

            <Grid container spacing={0} >

                <Grid item xs={12} justify="center" >

            

                    <h3 className="eventOverviewHeaders">Climate News</h3>

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

    
                </Grid>
            </Grid>
        </div>
    )

}

export default ArticlesPage; 