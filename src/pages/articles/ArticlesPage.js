import React from 'react';
import { Box, Card, CardActions, Typography } from '@material-ui/core';
import './Articles.css';
import {useStyles} from './styles.js'
import Grid from '@material-ui/core/Grid';
import eWaste from './images/ewaste.jpg';
import polarBear from './images/polar_bear.jpg';
import glacier from './images/glacier.jpg';
import forest from './images/forest.jpg';
import vendingmachine from './images/vendingmachine.png';
import sentosa from './images/sentosa.png';
import crossTrail from './images/crossTrail.jpg';
import forestore from './images/forestore.jpg';
import kayaking from './images/kayaking.png';
import sultanJohor from './images/sultanJohor.png';
import toilet from './images/toilet.jpg';
import sgGP from './images/sgGP.png';
import diesel from './images/diesel.png';
import campervan from './images/campervan.png';

function ArticlesPage(){

    const classes = useStyles();

    return (
        <div className={classes.bgImg}>

            <Grid container spacing={0} >

                <Grid item xs={12} justify="center" >

            

                    <h3 className="eventOverviewHeaders">Climate News</h3>

                    <hr/>
{/* 
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <div class="alignContent">
                            <div class="content">

                                <div className="imgContent" justify="center">
                                    <img className={classes.imgClass} src={} />
                                </div>

                                <div class="imgText">
                                    <h5 class="imgTextChildDate">March 03, 2021</h5>
                                    <h5 class="imgTextChild"></h5>
                                    <h5 class="imgTextChildSub"> </h5>
                                </div>
                            </div>
                        </div>
                    </a>

                    <hr/>

                    <a href="" target="_blank" rel="noopener noreferrer">
                        <div class="alignContent">
                            <div class="content">

                                <div className="imgContent" justify="center">
                                    <img className={classes.imgClass} src={} />
                                </div>

                                <div class="imgText">
                                    <h5 class="imgTextChildDate">March 03, 2021</h5>
                                    <h5 class="imgTextChild"></h5>
                                    <h5 class="imgTextChildSub"> </h5>
                                </div>
                            </div>
                        </div>
                    </a>

                    <hr/>*/}

                    <a href="https://mothership.sg/2021/03/the-breakfast-club-jacinda/" target="_blank" rel="noopener noreferrer">
                        <div class="alignContent">
                            <div class="content">

                                <div className="imgContent" justify="center">
                                    <img className={classes.imgClass} src={campervan} />
                                </div>

                                <div class="imgText">
                                    <h5 class="imgTextChildDate">March 05, 2021</h5>
                                    <h5 class="imgTextChild">S'porean, 32, starts plant-based meal delivery service after Covid-19 disrupts campervan travel to Europe</h5>
                                    <h5 class="imgTextChildSub">A young Singaporean, who had her globe trotting cut short by the Covid-19 pandemic, returned home to start an organic farm-to-table vegan home kitchen.</h5>
                                </div>
                            </div>
                        </div>
                    </a>

                    <hr/>

                    <a href="https://mothership.sg/2021/03/sentosa-carbon-neutral-2030/" target="_blank" rel="noopener noreferrer">
                        <div class="alignContent">
                            <div class="content">

                                <div className="imgContent" justify="center">
                                    <img className={classes.imgClass} src={sentosa} />
                                </div>

                                <div class="imgText">
                                    <h5 class="imgTextChildDate">March 05, 2021</h5>
                                    <h5 class="imgTextChild">Sentosa to become carbon-neutral leisure destination by 2030</h5>
                                    <h5 class="imgTextChildSub">Singapore's plans to improve sustainability in various sectors will see the resort island of Sentosa transform into a carbon-neutral leisure destination by 2030.

This will be a whole-of-Sentosa effort, involving all businesses on the island, and a partnership between the Sentosa Development Corporation (SDC) and Temasek.</h5>
                                </div>
                            </div>
                        </div>
                    </a>

                    <hr/>

                    <a href="https://www.straitstimes.com/multimedia/the-big-story-no-more-new-diesel-cars-taxis-in-spore-from-2025" target="_blank" rel="noopener noreferrer">
                        <div class="alignContent">
                            <div class="content">

                                <div className="imgContent" justify="center">
                                    <img className={classes.imgClass} src={diesel} />
                                </div>

                                <div class="imgText">
                                    <h5 class="imgTextChildDate">March 04, 2021</h5>
                                    <h5 class="imgTextChild">No more new diesel cars, taxis in S'pore from 2025</h5>
                                    <h5 class="imgTextChildSub">Opening the debate on the Government's sustainability plans in Parliament on Thursday (March 4), Senior 
                                    Minister Teo Chee Hean said climate change poses an existential challenge for Singapore. 
                                    The country's unique constraints also mean that the trade-offs it faces in cutting its emissions are much starker than other countries.</h5>
                                </div>
                            </div>
                        </div>
                    </a>  

                    <hr/>

                    <a href="https://mothership.sg/2021/03/nparks-recreational-routes/" target="_blank" rel="noopener noreferrer">
                        <div class="alignContent">
                            <div class="content">

                                <div className="imgContent" justify="center">
                                    <img className={classes.imgClass} src={crossTrail} />
                                </div>

                                <div class="imgText">
                                    <h5 class="imgTextChildDate">March 04, 2021</h5>
                                    <h5 class="imgTextChild">NParks to develop longest 62km cross-island trail from Changi Beach to Tuas</h5>
                                    <h5 class="imgTextChildSub">The National Parks Board (NParks) will be curating more island-wide recreational routes in the coming years.

This is one of the new initiatives to transform Singapore into a City in Nature, Minister for National Development Desmond Lee said on Mar. 4 during COS Debates.</h5>
                                </div>
                            </div>
                        </div>
                    </a>

                    <hr/>

                    <a href="https://mothership.sg/2021/03/5-reverse-vending-machines-jurong/" target="_blank" rel="noopener noreferrer">
                        <div class="alignContent">
                            <div class="content">

                                <div className="imgContent" justify="center">
                                    <img className={classes.imgClass} src={vendingmachine} />
                                </div>

                                <div class="imgText">
                                    <h5 class="imgTextChildDate">March 03, 2021</h5>
                                    <h5 class="imgTextChild">5 new vending machines in Jurong allow exchange of plastic bottles &amp; cans for rewards</h5>
                                    <h5 class="imgTextChildSub"> Jurong residents will soon have a convenient way to recycle and get rewards in return.

                                    A total of five Reverse Vending Machines (RVMs) will be deployed at various locations in the west.

                                    It is part of a pilot programme in Jurong by the National Environment Agency (NEA), under waste management provider, Alba W&amp;H Smart City's Public Waste Collection. </h5>
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

                    <a href="https://rvrc.nus.edu.sg/2021/01/paddling-for-cleaner-waterways/" target="_blank" rel="noopener noreferrer">
                    <div class="alignContent">
                        <div class="content">

                            <div className="imgContent" justify="center">
                                <img className={classes.imgClass} src={kayaking} />
                            </div>

                            <div class="imgText">
                                <h5 class="imgTextChildDate">January 5, 2021</h5>
                                <h5 class="imgTextChild">RVRC - Paddling for cleaner waterways</h5>
                                <h5 class="imgTextChildSub">RVRC staff and students had fun kayaking on the peaceful waters of Jurong lake, where they 
                                encountered an extensive amount of trash in the seemingly clean and pristine lake. Spanning seven kayaking sessions, students collected and 
                                documented 1279 items of trash comprising primarily plastic bags and food packaging.
                                 The activity provided the participants with an impactful reminder to be vigilant about their individual consumption and disposal habits for single-use plastics.</h5>
                            </div>
                        </div>
                        </div>
                    </a>

                    <hr/>


                    <a href="https://rvrc.nus.edu.sg/2020/08/rv-forestore-fighting-weeds-at-chestnut-np-29-aug/" target="_blank" rel="noopener noreferrer">
                    <div class="alignContent">
                        <div class="content">

                            <div className="imgContent" justify="center">
                                <img className={classes.imgClass} src={forestore} />
                            </div>

                            <div class="imgText">
                                <h5 class="imgTextChildDate">August 29, 2020</h5>
                                <h5 class="imgTextChild">RVRC - Forest Restoration</h5>
                                <h5 class="imgTextChildSub">A team of five headed down to our forest restoration plot at Chestnut Nature Park on Saturday morning. It was the first Seedling Protection Activity (SPA) by RV FoRestore since March. After the long hiatus invasive climbers had 
                                smothered some of the young trees planted. 
                                The Zone B team had a good workout rescuing the young trees from the weeds!</h5>
                            </div>
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