import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Button, CardMedia } from '@material-ui/core/';
import Typography from '../Typography';
import speakers from './../../assets/img/speakers2020/allspeakers2020.png';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.light,
    },
    container: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
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
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        color: theme.palette.primary.dark,
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
    secundary: {
        color: theme.palette.getContrastText(theme.palette.primary.light),
        backgroundColor: theme.palette.primary.light,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
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


function InvitedSpeakersMain(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
            <Grid container spacing={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" className={classes.title}>
                            Invited Talks
                        </Typography>
                        <Typography variant="body1" className={classes.title}>
                            The workshop will feature invited talks from prominent researchers 
                            and practitioners, oral presentations, and a poster session. There 
                            will also be socials to facilitate networking, discussion of different
                            career opportunities in AI, and sharing of ideas to increase participation 
                            of Black researchers in the field. We invite all members of the AI community 
                            to attend the workshop.
                        </Typography>
                        <ColorButton className={classes.chip} variant="contained" href="/talks2020">
                            Invited Speakers & Keynotes
                        </ColorButton>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CardMedia component="img" image={speakers}
                            alt="Almost invited speakers headshot image">
                        </CardMedia>
                    </Grid>
                </Grid>
            </Grid>
            </Container>
        </section>

    );
}

InvitedSpeakersMain.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InvitedSpeakersMain);
