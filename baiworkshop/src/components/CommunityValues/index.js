import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Divider, Chip, Button, Link} from '@material-ui/core/';
import Typography from './../Typography';
import backgroundImage from './../../assets/img/appCurvyLines.png';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.secondary.light,
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        display: 'flex',
        position: 'relative',
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
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -150,
    },
    chip: {
        margin: theme.spacing(1),
        size: 'large',
        borderRadius: "40px",
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

const valueslist = [
    {
        id: 1, title: '201*',
        text: 'BAI founded. Also give a brief info about how that happened e.g. where and first steps.'
    },
    {
        id: 2, title: '5999',
        text: 'We’ve grown from this number to that number of members over this period of time.'
    },
    {
        id: 3, title: '12+',
        text: 'Number of workshops held or some other metric that shows how far we’ve come'
    },
    {
        id: 4, title: '4000%',
        text: 'Increase in number of Blacks participating in major AI conferences globally.'
    },
];

function CommunityValues(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={12}>
                    <Grid container spacing={3}>
                        <img src={backgroundImage} className={classes.curvyLines} alt="empty image"/>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" color="secondary" className={classes.title}>
                                We're addressing the diversity crisis in AI
                            </Typography>
                            <JoinUsButton className={classes.chip} variant="contained" href="https://docs.google.com/forms/d/e/1FAIpQLSd85BdKTNiN2ZJnMJPI37dligr0Q-_cs5Ik8d9qYDfkheS5Xw/viewform">
                                Join Us
                            </JoinUsButton>
                            <ColorButton className={classes.chip} variant="contained" href="/cpfbai2020">
                                Black in Ai - Workshop 2020
                            </ColorButton>
                            <br></br>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" className={classes.title}>
                                We want increase the presence of Black people in the 
                                field of Artificial Intelligence
                            </Typography>
                            <Typography variant="body1" className={classes.title}>
                                Our initiatives include an academic positions program, events at various 
                                conferences related to AI, advocacy, and community building.
                            </Typography>
                            <Typography variant="h4" className={classes.title}>
                                If you self-identify as Black, join us.
                            </Typography>
                            <Typography variant="body1" className={classes.title}>
                                If you are in the <b>field of AI and self-identify as Black</b>, please 
                                fill out the <Link color="inherit" href="https://docs.google.com/forms/d/e/1FAIpQLSd85BdKTNiN2ZJnMJPI37dligr0Q-_cs5Ik8d9qYDfkheS5Xw/viewform"><u><b>Google Form</b></u></Link>, to request to join and we will add you 
                                to various platforms that we maintain. We also welcome allies to 
                                join our group using the Google form. Allies will be added to our 
                                email lists, where we send out group updates and requests for 
                                assistance.
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* <Grid container spacing={5}>
                        {valueslist.map(key => (
                            <Grid item xs={12} md={3}>
                                <div className={classes.item}>
                                    {key.image}
                                    <Typography variant="h3" className={classes.title}>
                                        {key.title}
                                    </Typography>
                                    <Typography variant="h5">
                                        {key.text}
                                    </Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid> */}
                </Grid>
            </Container>
        </section>

    );
}

CommunityValues.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommunityValues);
