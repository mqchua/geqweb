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

            

                    <h3 className="eventOverviewHeaders">Hackathon</h3>

                    <div class="content2">

                        <div className="imgContent" justify="center">
                            <img className={classes.imgClass} src={polarBear} />
                        </div>

                        <div class="imgText">
                            <h5 class="imgTextChild"> Experienced in coding? Passionate about software development? Sign up now to be a part 
                            of the first hackathon run by NUS FinTech Society!</h5>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )

}

export default ArticlesPage; 