import { CardMedia, Container, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import image1 from './../../assets/img/bai-img-2.jpg';
import image2 from './../../assets/img/bai-img-4.JPG';
import image4 from './../../assets/img/bai-img-7.jpg';
import image5 from './../../assets/img/bai-img-8.jpg';
import HeaderLayout from './../HeaderLayout';
import Typography from './../Typography';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
    },
    background: {
        display: 'flex',
        position: 'relative',
        backgroundPosition: 'center',
    },
    container: {
        marginTop: theme.spacing(-10),
        // marginBottom: theme.spacing(2),
        display: 'flex',
        position: 'relative',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 2),
    },
    card: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    divider: {
        size: "5px",
    }
});

function Header(props) {
    const { classes } = props;

    return (
        <HeaderLayout backgroundClassName={classes.background}>
            <Container className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12} className={classes.container}>
                        <Grid item xs={12} md={6}>
                            <Typography align="left" variant="h4" marked="center">
                                Black in AI is a place for sharing ideas,
                                fostering collaborations and discussing
                                initiatives to increase the presence of
                                Black people in the field of Artificial
                                Intelligence.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CardMedia component="img" height="210" image={image1}
                            alt="Almost ten black people, smiling, with raised hands. All wearing the black in AI badge.">
                        </CardMedia>
                        <br></br>
                        <CardMedia component="img" height="210" image={image2}
                            alt="Black people, smiling, with their hands up, wearing T-shirts with a raised fist, the black in AI logo.">
                        </CardMedia>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CardMedia component="img" height="210" image={image4}
                            alt="A large auditorium, with several chairs being occupied by black people looking at the stage">
                        </CardMedia>
                        <br></br>
                        <CardMedia component="img" height="210" image={image5}
                            alt="The Black in AI organizers, 3 men and 3 women. Everyone standing, smiling and arm in arm.">
                        </CardMedia>
                    </Grid>
                </Grid>
            </Container>
        </HeaderLayout>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
