import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Card, CardContent, Button, Avatar} from '@material-ui/core/';
import Typography from '../Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.light,
    },
    container: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(10),
        display: 'flex',
        position: 'relative',
    },
    more: {
        marginTop: theme.spacing(5),
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        padding: theme.spacing(0, 5),
    },
    avatarSize: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    icon: {
        alignItems: 'left',
        padding: theme.spacing(3),
    },
    card: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(8),
    }
});

const teamlist = [
    {
        image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/0/3/e/7/03e77e13163a8f4e83a3672976227aac.jpg',
        title: 'Team member’s name', subtitle: 'Designation',
        bio: 'Short bio about this team member. It has been placed here solely to demonstrate the look and feel of finished, typeset text',
        icon_1: <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"/>,
        icon_2: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/>,
    },
    {
        image: 'https://media.vanityfair.com/photos/5f074915e132b56358d73f5f/16:9/w_1999,h_1124,c_limit/VF0720_Viola_Davis_Tout.jpg',
        title: 'Team member’s name', subtitle: 'Designation',
        bio: 'Short bio about this team member. It has been placed here solely to demonstrate the look and feel of finished, typeset text',
        icon_1: <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"/>,
        icon_2: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/>,
    },
    {
        image: 'https://res.6chcdn.feednews.com/assets/v2/f6fc3725d32724d922ce1801dda93b00?quality=uhq&resize=720',
        title: 'Team member’s name', 
        subtitle: 'Designation',
        bio: 'Short bio about this team member. It has been placed here solely to demonstrate the look and feel of finished, typeset text',
        icon_1: <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"/>,
        icon_2: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/>,
    },
    {
        image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/0/3/e/7/03e77e13163a8f4e83a3672976227aac.jpg',
        title: 'Team member’s name', 
        subtitle: 'Designation',
        bio: 'Short bio about this team member. It has been placed here solely to demonstrate the look and feel of finished, typeset text',
        icon_1: <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"/>,
        icon_2: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/>,
    },
    {
        image: 'https://media.vanityfair.com/photos/5f074915e132b56358d73f5f/16:9/w_1999,h_1124,c_limit/VF0720_Viola_Davis_Tout.jpg',
        title: 'Team member’s name',
        subtitle: 'Designation',
        bio: 'Short bio about this team member. It has been placed here solely to demonstrate the look and feel of finished, typeset text',
        icon_1: <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"/>,
        icon_2: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/>,
    },
    {
        image: 'https://res.6chcdn.feednews.com/assets/v2/f6fc3725d32724d922ce1801dda93b00?quality=uhq&resize=720',
        title: 'Team member’s name', 
        subtitle: 'Designation',
        bio: 'Short bio about this team member. It has been placed here solely to demonstrate the look and feel of finished, typeset text',
        icon_1: <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"/>,
        icon_2: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />,
    },
];

function TeamMembers(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h4" marked="center" align="center" component="h2">
                            Our Team
                        </Typography>
                    </Grid>
                    {teamlist.map((tile) => (
                        <Grid item xs={12} md={4}>
                            <Avatar alt={tile.title} src={tile.image} className={classes.avatarSize} />
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.title} variant="h6" gutterBottom>
                                        {tile.title}
                                    </Typography>
                                    <Typography variant="body1" component="h2">
                                        {tile.subtitle}
                                    </Typography>
                                    <br></br>
                                    <Typography variant="body2" component="p">
                                        {tile.bio}
                                    </Typography>
                                    <Grid container spacing={2} className={classes.icon} >
                                        <Grid md={2}>
                                            {tile.icon_1}
                                        </Grid>
                                        <Grid md={2}>
                                            {tile.icon_2}
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

TeamMembers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamMembers);
