import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Button } from '@material-ui/core/';
import Typography from './../Typography';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.secondary.main,
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
        color: theme.palette.primary.light,
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


function JoinUs(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>

                <Grid item xs={12} md={6}>
                    <Typography variant="h2" className={classes.title}>
                        We’re just getting started
                    </Typography>
                    <Typography variant="body1" className={classes.title}>
                        Paint a picture of the future you’re looking to bring about through
                        your work as an organization. This is dummy copy. It is not meant to
                        be read. It has been placed here solely to demonstrate the look and
                        feel of finished, typeset text. Only for show. He who searches for
                        meaning here will be sorely disappointed.
                    </Typography>
                    <ColorButton className={classes.chip} variant="contained" href="/">
                        How You Can Help
                    </ColorButton>
                    <JoinUsButton className={classes.chip} variant="contained" href="/">
                        Join Us
                    </JoinUsButton>
                </Grid>
            </Container>
        </section>

    );
}

JoinUs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JoinUs);
