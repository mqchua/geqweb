import React from 'react';
import { Box, Card, CardActions, Typography } from '@material-ui/core';
import './Volunteer.css';
import {useStyles} from './styles.js'
import Grid from '@material-ui/core/Grid';
import ceb from './images/ceb.jpg';
import hantublog from './images/hantublog.jpg';
import seagrass from './images/seagrass.jpg';


function ArticlesPage(){

    const classes = useStyles();

    return (
        <div className={classes.bgImg}>

            <Grid container spacing={0} >

                <Grid item xs={12} justify="center" >

            

                    <h3 className="eventOverviewHeaders">Volunteer Groups</h3>

                    <hr/>

                    <a href="https://celebratingsingaporeshores.blogspot.com/" target="_blank" rel="noopener noreferrer">
                        <div class="content">

                            <div className="imgContent" justify="center">
                                <img className={classes.imgClass} src={ceb} />
                            </div>

                            <div class="imgText">
                                <h5 class="imgTextChild">Singapore Celebrates our Shores</h5>
                                <h5 class="imgTextChildSub">As part of International Year of the Reef 2018, lots of opportunities to volunteer and intern on marine issues and actions. More details on the Singapore Celebrates our Shores 2018 blog with FAQ and sign up details..</h5>
                            </div>
                        </div>
                    </a>

                    <hr/>

                    <a href="https://teamseagrass.blogspot.com/" target="_blank" rel="noopener noreferrer">
                        <div class="content">

                            <div className="imgContent" justify="center">
                                <img className={classes.imgClass} src={seagrass} />
                            </div>

                            <div class="imgText">
                                <h5 class="imgTextChild">Team Sea Grass</h5>
                                <h5 class="imgTextChildSub">A volunteer effort to monitor seagrasses and other intertidal life on our shores, as part of international Seagrass Watch which covers 150 sites around the world. No experience required, just a passion for the outdoors and our shores. More details on the TeamSeagrass blog with FAQ and sign up details.</h5>
                            </div>
                        </div>
                    </a>

                    <hr/>

                    <a href="http://www.pulauhantu.sg/about/" target="_blank" rel="noopener noreferrer">
                        <div class="content">

                            <div className="imgContent" justify="center">
                                <img className={classes.imgClass} src={hantublog} />
                            </div>

                            <div class="imgText">
                                <h5 class="imgTextChild">Hantu Bloggers</h5>
                                <h5 class="imgTextChildSub">are volunteers passionate about diving Singapore and Pulau Hantu. Their goal is to safeguard Singapore's natural marine heritage and raise awareness of Singapore's reefs. More details on the Hantu Blog with FAQ and sign up details.</h5>
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