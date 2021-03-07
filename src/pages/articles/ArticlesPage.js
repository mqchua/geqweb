import React from 'react';
import { Box, Card, CardActions, Typography } from '@material-ui/core';
import './Articles.css';
import {useStyles} from './styles.js'
import Grid from '@material-ui/core/Grid';
import eWaste from './images/ewaste.jpg';
import polarBear from './images/polar_bear.jpg';
import glacier from './images/glacier.jpg';
import forest from './images/forest.jpg';
import sultanJohor from './images/sultanJohor.png';
import toilet from './images/toilet.jpg';
import sgGP from './images/sgGP.png';


function ArticlesPage(){

    const classes = useStyles();

    return (
        <div className={classes.bgImg}>

            <Grid container spacing={0} >

                <Grid item xs={12} justify="center" >

            

                    <h3 className="eventOverviewHeaders">Climate News</h3>

                    <hr/>

                    <a href="https://www.channelnewsasia.com/news/asia/malaysia-johor-sultan-largest-solar-plant-pengerang-14305438#:~:text=%22To%20be%20called%20the%20Sultan,for%202021%2C%20the%20statement%20said." target="_blank" rel="noopener noreferrer">
                        <div class="alignContent">
                            <div class="content">

                                <div className="imgContent" justify="center">
                                    <img className={classes.imgClass} src={sultanJohor} />
                                </div>

                                <div class="imgText">
                                    <h5 class="imgTextChildDate">March 01, 2021</h5>
                                    <h5 class="imgTextChild">Johor to build largest solar power plant in Southeast Asia: Sultan Ibrahim</h5>
                                    <h5 class="imgTextChildSub">The sultan outlined that the project will have a "healthy economic spill over effect" for the people by creating jobs "at various levels", said the statement.

    “With this exciting project, Johor will make a quantum leap into the world of renewable and sustainable clean energy,” he said. 

    He added that the project will mark Johor’s first major foray into large-scale sustainable energy to foster green economies and a cleaner environment.</h5>
                                </div>
                            </div>
                        </div>
                    </a>

                    <hr/>

                    <a href="https://www.greenplan.gov.sg/" target="_blank" rel="noopener noreferrer">
                        <div class="alignContent">
                            <div class="content">

                                <div className="imgContent" justify="center">
                                    <img className={classes.imgClass} src={sgGP} />
                                </div>

                                <div class="imgText">
                                    <h5 class="imgTextChildDate">March 03, 2021</h5>
                                    <h5 class="imgTextChild">The Singapore Green Plan</h5>
                                    <h5 class="imgTextChildSub">The Singapore Green Plan is a multi ministry effort to encourage sustainability in key areas including sustainable urban development, green energy use, and green economic growth. One key area is the Enterprise Sustainability Programme which will help enterprises, especially SMEs, embrace sustainability and develop capabilities in this area. </h5>
                                </div>
                            </div>
                        </div>
                    </a>

                    <hr/>

                    <a href="https://www.todayonline.com/singapore/collecting-toilet-rolls-and-installing-solar-panels-these-students-drive-change" target="_blank" rel="noopener noreferrer">
                        <div class="alignContent">
                            <div class="content">

                                <div className="imgContent" justify="center">
                                    <img className={classes.imgClass} src={toilet} />
                                </div>

                                <div class="imgText">
                                    <h5 class="imgTextChildDate">February 06, 2021</h5>
                                    <h5 class="imgTextChild">Collecting toilet rolls and installing solar panels, these students drive change for the environment</h5>
                                    <h5 class="imgTextChildSub">In December 2018, as a Secondary Three student in Nanyang Girls’ High School, Laura founded ToiletRollSG, a national initiative that aims to collect 1,000kg of these cardboard cylinders — or about 150,000 pieces. 

    A little more than two years later, Laura, now 17, is nearing her target, and has collected 860kg of toilet rolls.

    The Hwa Chong Institution student was among 10 people awarded the National Environment Agency’s Ecofriend Awards. </h5>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* <hr/>

                    <a href="" target="_blank" rel="noopener noreferrer">
                        <div class="content">

                            <div className="imgContent" justify="center">
                                <img className={classes.imgClass} src={} />
                            </div>

                            <div class="imgText">
                                <h5 class="imgTextChildDate">February 11, 2021</h5>
                                <h5 class="imgTextChild"></h5>
                                <h5 class="imgTextChildSub"></h5>
                            </div>
                        </div>
                    </a> */}

                    <hr/>

                    <a className="linksVideo" href="https://www.straitstimes.com/singapore/singapore-to-have-new-electronic-waste-disposal-system-this-year" target="_blank" rel="noopener noreferrer">
                        <div class="alignContent">
                            <div class="content">
                                <div className="imgContent" justify="center">
                                    <img className={classes.imgClass} src={eWaste} />
                                </div>

                                <div class="imgText">
                                    <h5 class="imgTextChildDate">February 11, 2021</h5>
                                    <h5 class="imgTextChild">Singapore to have new electronic waste disposal system this year</h5>
                                    <h5 class="imgTextChildSub">SINGAPORE - A new electronic and electrical waste collection system will be available in Singapore soon, including receptacles in public areas, scheduled collection drives and ad-hoc doorstep collection services,
                                    the National Environment Agency (NEA) said in a statement on Thursday (Feb 11).</h5>
                                </div>
                            </div>
                        </div>
                    </a>

                    <hr/>

                    {/* <a href="https://www.rnz.co.nz/news/national/434686/ecotherapy-mental-health-and-the-climate-crisis" target="_blank" rel="noopener noreferrer">
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
                    </a> */}

                    <hr/>


    
                </Grid>
            </Grid>
        </div>
    )

}

export default ArticlesPage; 