import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from './../Button';
import Typography from './../Typography';
import HeaderLayout from './../HeaderLayout';
import { Card, CardMedia, Container, Divider, Grid, GridList, GridListTile } from '@material-ui/core';

import image1 from './../../assets/img/bai-img-1.jpg';
import image2 from './../../assets/img/bai-img-2.jpg';
import image3 from './../../assets/img/bai-img-3.png';


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
        marginTop: theme.spacing(8),
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
    card: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(30),
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
                        <CardMedia component="img" height="440" image={image1}>
                        </CardMedia>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CardMedia component="img" height="210" image={image2}>
                        </CardMedia>
                        <br></br>
                        <CardMedia component="img" height="210" image={image3}>
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
