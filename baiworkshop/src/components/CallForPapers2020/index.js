import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Button } from '@material-ui/core/';
import Typography from '../Typography';
import backgroundImage from './../../assets/img/neuripslogo.png';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.seconday,
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    image: {
        height: 60,
    },
    title: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        color: theme.palette.primary.dark,
    },
    chip: {
        margin: theme.spacing(1),
        size: 'large',
        borderRadius: "40px",
    },
    curvyLines: {
        height: 200,
        top: 0,
    },
    alert:{
        color: theme.palette.error.main,
    }
});

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        backgroundColor: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    secundary: {
        color: theme.palette.getContrastText(theme.palette.primary.light),
        backgroundColor: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}))(Button);

const JoinUsButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(theme.palette.primary.light),
        backgroundColor: theme.palette.primary.light,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
}))(Button);


function CallForPapers2020(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid item xs={12} md={10}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={5}>
                                <div className={classes.item}>
                                    <img src={backgroundImage} className={classes.curvyLines} alt="empty image"/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <div className={classes.item}>
                                <Typography variant="h2" className={classes.title}>
                                    Call For Papers Black in AI Workshop 2020
                                </Typography>
                                </div>
                            </Grid>
                    </Grid> 
                    
                    <Typography variant="body1" className={classes.title}>
                        Black researchers in AI, ML and related application areas (health, agriculture, politics, economics, law etc.) 
                        are welcome to submit their work.

                        We invite submissions for the 4th Black in AI Workshop (co-located with NeurIPS). 
                        The workshop will be held virtually on <b>Monday, December 7 2020</b>. 
                        We encourage individuals from Black, African, and Diasporic communities to submit their work.

                        <b className={classes.alert}> Submission deadline has NOW PASSED! </b> 
                        <b> Authors of accepted papers will be notified after November 6th 2020.</b>

                    </Typography>
                    <ColorButton className={classes.chip} variant="contained" href="https://bit.ly/3iQQmgr">
                        Read More
                    </ColorButton>
                    <ColorButton className={classes.chip} variant="contained" href="/talks2020">
                        BAI 2020 Invited Talks
                    </ColorButton>
                    <ColorButton className={classes.chip} variant="contained" href="/datagrant2020">
                        NeurIPS Registration Assistance and Data Grants
                    </ColorButton>
                </Grid>
            </Container>
        </section>

    );
}

CallForPapers2020.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CallForPapers2020);
