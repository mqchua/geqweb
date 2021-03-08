import React from 'react';
import './Articles.css';
import {useStyles} from './styles.js'
import Grid from '@material-ui/core/Grid';
import articlesdata from './ArticlesData';

function ArticlesPage(){

    const classes = useStyles();

    return (
        <div className={classes.bgImg}>

            <Grid container spacing={0} >

                <Grid item xs={12} justify="center" >

                    <h3 className="eventOverviewHeaders">Climate News</h3>

            
                    {articlesdata.map(article => {
                        return (
                            <div>
                                <a href={article.link} target="_blank" rel="noopener noreferrer">
                                    <div class="alignContent">
                                        <div class="content">

                                            <div className="imgContent" justify="center">
                                                <img className={classes.imgClass} src={article.image} />
                                            </div>

                                            <div class="imgText">
                                                <h5 class="imgTextChildDate">{article.date}</h5>
                                                <h5 class="imgTextChild">{article.title}</h5>
                                                <h5 class="imgTextChildSub">{article.content}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })}

                </Grid>
            </Grid>
        </div>
    )

}

export default ArticlesPage; 