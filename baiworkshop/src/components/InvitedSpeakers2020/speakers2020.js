import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Button } from '@material-ui/core/';
import Typography from '../Typography';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.light,
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


function InvitedSpeakersPage(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid item xs={12}>
                    <Typography variant="h4" marked="center" align="center" className={classes.title}>
                        Black in AI 2020 Invited Talks
                    </Typography>
                </Grid> 
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" className={classes.title}>
                        Invited Talks
                    </Typography>
                    <Typography variant="body1" className={classes.title}>
                        The Black in AI Academic program is committed to serving as a 
                        resource and supporting Black junior researchers as they apply 
                        to graduate programs, navigate graduate school, and enter the 
                        postgraduate job market.
                    </Typography>
                    <ColorButton className={classes.chip} variant="contained" href="/academicprograms">
                        Academic Programs Information
                    </ColorButton>
                </Grid>
            </Container>
        </section>

    );
}

InvitedSpeakersPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InvitedSpeakersPage);
