import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";

const QuestionCard = ({data}) =>
    <Card>
        {data &&
        <Grid container>
            <Grid item xs={3}/>
            <Grid item xs={6} className='margin-top-100 margin-bottom-100'>
                <Typography variant="h6" component="h2">
                    {data.description1}
                </Typography>
                <br/>
                <Typography color="textSecondary" variant="h3" component="h2">
                    You are more of an {data.name}
                </Typography>
                <br/>
                <Typography variant="h6" component="h2">
                    {data.description2}
                </Typography>
            </Grid>
            <Grid item xs={3}/>
        </Grid>
        }
    </Card>

export default QuestionCard;