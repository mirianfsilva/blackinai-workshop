import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Divider, Chip, Button, Avatar, Link } from '@material-ui/core/';
import Typography from './../Typography';
import backgroundImage from './../../assets/img/appCurvyLines.png';

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
        height: 60,
    },
    title: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(5),
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -160,
    },
    chip: {
        margin: theme.spacing(1),
        size: 'small',
        borderRadius: "40px",
    },
    avatarSize: {
        height: theme.spacing(6),
    },
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

const OrgButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(theme.palette.primary.light),
        backgroundColor: theme.palette.primary.light,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
}))(Button);

const sponsorslist = [
    //Diamond
    {
        title: 'Google',
        image: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png',
        link: 'https://about.google/',
        alt: 'Google logo',
    },
    {
        title: 'Apple',
        image: 'https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c516.png',
        link: 'https://www.apple.com/',
        alt: 'Apple logo',
    },
    {
        title: 'Deepmind',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/12/DeepMind_logo.png',
        link: 'https://deepmind.com/',
        alt: 'Deepmind logo',
    },
    {
        title: 'MacArthur Foundation',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/MacArth_primary_logo_stacked.svg/1200px-MacArth_primary_logo_stacked.svg.png',
        link: 'https://www.macfound.org/',
        alt: 'MacArthur Foundation logo',
    },
    {
        title: 'Ford Foundation',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOxlZbAt8EnvDFysNst-AfvLU2vWx0XP9CGQ&usqp=CAU',
        link: 'https://www.fordfoundation.org/',
        alt: 'Ford Foundation logo',
    },
    //Platinum
    {
        title: 'Nvidia',
        image: 'https://amakbrasil.com.br/wp-content/uploads/2020/06/logo-1-1024x506.png',
        link: 'https://www.nvidia.com/',
        alt: 'Nvidia logo',
    },
    //Gold
    {
        title: 'Berkeley University',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png',
        link: 'https://www.berkeley.edu/',
        alt: 'Berkeley University logo',
    },
    {
        title: 'AI2',
        image: 'https://allenai.org/_next/static/images/AI2_Logo_Square_Gradients-dcd989f39f9f4248b53105719ca2af20.png',
        link: 'https://allenai.org/',
        alt: 'AI2 logo',
    },
    {
        title: 'Microsoft',
        image: 'https://letsteachtheworld.org/wp-content/uploads/2016/07/myce-microsoft-Logo-2.png',
        link: 'https://www.microsoft.com/',
        alt: 'Microsoft logo',
    },
    {
        title: 'Facebook',
        image: 'https://logosmarcas.net/wp-content/uploads/2020/04/Facebook-Logo.png',
        link: 'https://about.fb.com/',
        alt: 'Facebook logo',
    },
    {
        title: 'BMO',
        image: 'https://3.bp.blogspot.com/-stML2IUSp6A/V-k-nmWqt3I/AAAAAAAAAnA/5V8ZmQgQ4HIMKe_257Mweq4qO-RJbrmnQCLcB/s1600/bank-of-montreal-logo.jpg',
        link: 'https://www.bmo.com/main/about-bmo/',
        alt: 'BMO logo',
    },
    {
        title: 'Amazon',
        image: 'https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204',
        link: 'http://www.datascienceafrica.org/',
        alt: 'Amazon logo',
    },
    {
        title: 'IBM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png',
        link: 'http://www.datascienceafrica.org/',
        alt: 'IBM logo',
    },
    //Silver
    {
        title: 'Salesforce',
        image: 'https://logodownload.org/wp-content/uploads/2020/04/salesforce-logo.png',
        link: 'http://www.datascienceafrica.org/',
        alt: 'Salesforce logo',
    },
    {
        title: 'Oracle',
        image: 'https://accutics.com/media/1219/oracle.png',
        link: 'http://www.datascienceafrica.org/',
        alt: 'Oracle logo',
    },
    //Bronze
    {
        title: 'Partnership on AI',
        image: 'https://pbs.twimg.com/profile_images/1004849332355502080/BcWc6y4B.jpg',
        link: 'http://www.datascienceafrica.org/',
        alt: 'Partnership on AI logo',
    },
    // {
    //     title: 'Hopper-Dean Foundation',
    //     image: 'https://www.datascienceafrica.org/img/logo.png',
    //     link: 'http://www.datascienceafrica.org/',
    //     alt: 'Hopper-Dean Foundation logo',
    // },
];


function Sponsors(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <Typography variant="h4" marked="center" align="center" component="h2" className={classes.title}>
                            2020 Sponsors
                        </Typography>
                    </Grid>
                    <Grid container spacing={5}>
                        {sponsorslist.map(key => (
                            <Grid item xs={12} md={2}>
                                <div className={classes.item}>
                                    <Link href={key.link}>
                                        <img alt={key.title} src={key.image} className={classes.avatarSize} />
                                    </Link>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

Sponsors.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sponsors);
