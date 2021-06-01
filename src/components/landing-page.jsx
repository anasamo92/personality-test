import { Typography, Box, Grid, Button } from '@material-ui/core';
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className='main'>
            <Box display="flex" alignItems='center' align="center" height={1}>
                <Grid container>
                    <Grid item xs={12} className='margin-bottom-50'>
                        <Typography variant='h3'>
                            Test:
                            <br/>
                            Are you an introvert or an extrovert?
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h5'>
                            Take this test, put together with <br/> input from psychoanalyst Sandrine Dury, and find out
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className='margin-top-100'>
                        <Link to="/personality-test">
                            <Button variant="contained" color="primary" size="large">
                                LET'S START!
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default LandingPage;
