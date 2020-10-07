import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Divider, Chip, Button } from '@material-ui/core/';
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
                        <img src={backgroundImage} className={classes.curvyLines} />
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" color="secondary" className={classes.title}>
                                We’re fixing the diversity crisis in AI.
                            </Typography>
                            <ColorButton className={classes.chip} variant="contained" href="/">
                                Our Programns
                            </ColorButton>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" className={classes.title}>
                                This sentence captures specifics about
                                the problem, it helps if its succint.
                            </Typography>
                            <Typography variant="body1" className={classes.title}>
                                This is dummy copy. It is not meant to be read. It has been placed here solely
                                to demonstrate the look and feel of finished, typeset text. Only for show. He
                                who searches for meaning here will be sorely disappointed. These words are
                                here to provide the reader with a basic impression of how actual text will
                                appear in its final presentation.
                            </Typography>
                            <Typography variant="h4" className={classes.title}>
                                This sentence captures specifics about
                                the problem, it helps if its succint.
                            </Typography>
                            <Typography variant="body1" className={classes.title}>
                                This is dummy copy. It is not meant to be read. It has been placed here solely
                                to demonstrate the look and feel of finished, typeset text. Only for show. He
                                who searches for meaning here will be sorely disappointed. These words are
                                here to provide the reader with a basic impression of how actual text will
                                appear in its final presentation.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5}>
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
                    </Grid>
                </Grid>
            </Container>
        </section>

    );
}

CommunityValues.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommunityValues);
