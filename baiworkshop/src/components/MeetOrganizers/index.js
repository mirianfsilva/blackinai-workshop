import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Button, Avatar, Card, CardContent, Link} from '@material-ui/core/';
import Typography from '../Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import charles from './../../assets/img/team/charles.jpeg';
import flora from './../../assets/img/team/flora.jpeg';
import foutse from './../../assets/img/team/foutse.jpg';
import ignatius from './../../assets/img/team/ignatius.jpg';
import nwamaka from './../../assets/img/team/nwamaka.jpg';
import salomey from './../../assets/img/team/salomey.jpg';
import tobi from './../../assets/img/team/tobi.jpg';
import victor from './../../assets/img/team/victor.jpg';
import mirian from './../../assets/img/team/mirian.png';
import krystal from './../../assets/img/team/krystal.png';

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
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    image: {
        height: 70,
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        color: theme.palette.primary.dark,
    },
    cardtitle: {
        color: theme.palette.primary.dark,
    },
    chip: {
        margin: theme.spacing(1),
        size: 'large',
        borderRadius: "40px",
    },
    avatarSize: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    card: {
        height: '90px',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
    icon: {
        color: theme.palette.primary.dark,
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

const teamlist = [
    {
        image: charles,
        title: 'Charles Earl', 
        subtitle: 'Automattic.com',
        link: 'https://www.linkedin.com/in/charlescearl6299/',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1.5x"/>,
    },
    {
        image: victor,
        title: 'Victor Silva',
        subtitle: 'University of Alberta',
        link: 'https://webdocs.cs.ualberta.ca/~vsilva/',
        icon: <FontAwesomeIcon icon={["fa", "link"]} size="1.5x"/>,
    },
    {
        image: ignatius,
        title: 'Ignatius Ezeani', 
        subtitle: 'Lancaster University',
        link: 'https://www.lancaster.ac.uk/scc/about-us/people/ignatius-ezeani',
        icon: <FontAwesomeIcon icon={["fa", "link"]} size="1.5x"/>,
    },
    {
        image: foutse,
        title: 'Foutse Yuehgoh', 
        subtitle: 'Coexel',
        link: 'https://twitter.com/yuehgoh',
        icon: <FontAwesomeIcon icon={["fab", "twitter"]} size="1.5x"/>,
    },
    {
        image: flora,
        title: 'Flora Tasse', 
        subtitle: 'Streem Inc',
        link: 'https://twitter.com/ftasse',
        icon: <FontAwesomeIcon icon={["fab", "twitter"]} size="1.5x"/>,
    },
    {
        image: tobi,
        title: 'Tobi Olatunji', 
        subtitle: 'enlitic.com',
        link: 'https://www.linkedin.com/in/tobi-olatunji-md',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x"/>,
    },
    {
        image: salomey,
        title: 'Salomey Osei', 
        subtitle: 'African Masters of Machine Intelligence (AMMI)',
        link: 'https://www.linkedin.com/in/salomey-osei-4b08a5b8/',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1.5x"/>,
    },
    {
        image: nwamaka,
        title: 'Nwamaka Okafor', 
        subtitle: 'University College Dublin',
        link: 'https://www.linkedin.com/in/amaka-okafor/',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1.5x"/>,
    },
    {
        image: mirian,
        title: 'Mírian Silva', 
        subtitle: 'IBM',
        link: 'https://twitter.com/mirianfrsilva',
        icon: <FontAwesomeIcon icon={["fab", "twitter"]} size="1.5x"/>,
    },
    {
        image: krystal,
        title: 'Krystal Maughan', 
        subtitle: 'University of Vermont',
        link: 'https://www.linkedin.com/in/krystal-maughan-3563a215/',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1.5x"/>,
    },
];

function MeetOrganizers(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h4" marked="center" align="center" className={classes.title}>
                            Black in AI 2020 Workshop Organizers
                        </Typography>
                    </Grid> 
                    {teamlist.map((tile) => (
                        <Grid item xs={12} md={3}>
                            <Avatar alt={tile.title} src={tile.image} className={classes.avatarSize} />
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.cardtitle} variant="h6" gutterBottom>
                                        {tile.title} <Link className={classes.icon} href={tile.link}>{tile.icon}</Link>
                                    </Typography>
                                    <Typography variant="body2" component="h2">
                                        {tile.subtitle} 
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                    <Grid item xs={12} align="center">
                        <ColorButton className={classes.chip} align="center" variant="contained" href="/organizers">
                            Meet the Organizers
                        </ColorButton>
                    </Grid> 
                </Grid>
            </Container>
        </section>

    );
}

MeetOrganizers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MeetOrganizers);
