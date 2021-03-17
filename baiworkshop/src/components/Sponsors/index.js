import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Link } from '@material-ui/core/';
import Typography from './../Typography';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.light,
    },
    container: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
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
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(5),
    },
    chip: {
        margin: theme.spacing(1),
        size: 'small',
        borderRadius: "40px",
    },
    avatarSize: {
        height: theme.spacing(7),
        marginBottom: theme.spacing(3),
    },
});

const sponsorslist = {
    Diamond:[
    {
        title: 'Google',
        image: require('./../../assets/img/sponsors-partners/google.png'),
        link: 'https://about.google/',
        alt: 'Google logo',
    },
    {
        title: 'Apple',
        image: require('./../../assets/img/sponsors-partners/apple.png'),
        link: 'https://www.apple.com/',
        alt: 'Apple logo',
    },
    {
        title: 'Deepmind',
        image: require('./../../assets/img/sponsors-partners/deepmind.png'),
        link: 'https://deepmind.com/',
        alt: 'Deepmind logo',
    },
    {
        title: 'MacArthur Foundation',
        image: require('./../../assets/img/sponsors-partners/macArthur.png'),
        link: 'https://www.macfound.org/',
        alt: 'MacArthur Foundation logo',
    },
    {
        title: 'Ford Foundation',
        image: require('./../../assets/img/sponsors-partners/fordfoundation.png'),
        link: 'https://www.fordfoundation.org/',
        alt: 'Ford Foundation logo',
    }],
    Platinum: [
    {
        title: 'Nvidia',
        image: require('./../../assets/img/sponsors-partners/nvidia.png'),
        link: 'https://www.nvidia.com/',
        alt: 'Nvidia logo',
    }],
    Gold:[
    {
        title: 'Berkeley University',
        image: require('./../../assets/img/sponsors-partners/berkeley.png'),
        link: 'https://www.berkeley.edu/',
        alt: 'Berkeley University logo',
    },
    {
        title: 'AI2',
        image: require('./../../assets/img/sponsors-partners/ai2.png'),
        link: 'https://allenai.org/',
        alt: 'AI2 logo',
    },
    {
        title: 'Microsoft',
        image: require('./../../assets/img/sponsors-partners/microsoft.png'),
        link: 'https://www.microsoft.com/',
        alt: 'Microsoft logo',
    },
    {
        title: 'Facebook',
        image: require('./../../assets/img/sponsors-partners/facebook.png'),
        link: 'https://about.fb.com/',
        alt: 'Facebook logo',
    },
    {
        title: 'BMO',
        image: require('./../../assets/img/sponsors-partners/bmo.png'),
        link: 'https://www.bmo.com/main/about-bmo/',
        alt: 'BMO logo',
    },
    {
        title: 'Amazon',
        image: require('./../../assets/img/sponsors-partners/amazon.png'),
        link: 'https://www.amazon.science/',
        alt: 'Amazon logo',
    },
    {
        title: 'IBM',
        image: require('./../../assets/img/sponsors-partners/ibm.png'),
        link: 'https://www.ibm.com/',
        alt: 'IBM logo',
    }],
    Silver:[
    {
        title: 'Salesforce',
        image: require('./../../assets/img/sponsors-partners/salesforce.png'),
        link: 'https://www.salesforce.com/company/about-us/',
        alt: 'Salesforce logo',
    },
    {
        title: 'Oracle',
        image: require('./../../assets/img/sponsors-partners/oracle.png'),
        link: 'https://www.oracle.com/corporate/',
        alt: 'Oracle logo',
    }],
    Bronze: [
    {
        title: 'Partnership on AI',
        image: require('./../../assets/img/sponsors-partners/partnershipAi.png'),
        link: 'https://www.partnershiponai.org/',
        alt: 'Partnership on AI logo',
    },
    {
        title: 'Hopper-Dean Foundation',
        image: require('./../../assets/img/sponsors-partners/hopperdeanfoundadion.png'),
        link: '/',
        alt: 'Hopper-Dean Foundation logo',
    }],
};

function Sponsors(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <Typography variant="h3" marked="center" align="center" component="h2" className={classes.title}>
                            2020 Sponsors
                        </Typography>
                    </Grid>
                    <Grid item xs={3} spacing={2}> 
                        <Grid item xs={12} md={8}>
                            <Typography variant="h4" marked="center" align="center" component="h2" className={classes.title}>
                                Diamond
                            </Typography>
                        </Grid>
                        {sponsorslist.Diamond.map(key => (
                            <Grid item xs={12} md={8}>
                                <div className={classes.item}>
                                    <Link href={key.link}>
                                        <img alt={key.title} src={key.image} className={classes.avatarSize} />
                                    </Link>
                                    <br></br>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xs={3} spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h4" marked="center" align="center" component="h2" className={classes.title}>
                                Gold
                            </Typography>
                        </Grid>
                        {sponsorslist.Gold.map(key => (
                            <Grid item xs={12} md={8}>
                                <div className={classes.item}>
                                    <Link href={key.link}>
                                        <img alt={key.title} src={key.image} className={classes.avatarSize} />
                                    </Link>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xs={3} spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h4" marked="center" align="center" component="h2" className={classes.title}>
                                Platinum
                            </Typography>
                        </Grid>
                        {sponsorslist.Platinum.map(key => (
                            <Grid item xs={12} md={8}>
                                <div className={classes.item}>
                                    <Link href={key.link}>
                                        <img alt={key.title} src={key.image} className={classes.avatarSize} />
                                    </Link>
                                </div>
                            </Grid>
                        ))}
                        <br></br>
                        <br></br>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h4" marked="center" align="center" component="h2" className={classes.title}>
                                Silver
                            </Typography>
                        </Grid>
                        {sponsorslist.Silver.map(key => (
                            <Grid item xs={12} md={8}>
                                <div className={classes.item}>
                                    <Link href={key.link}>
                                        <img alt={key.title} src={key.image} className={classes.avatarSize} />
                                    </Link>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xs={3} spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h4" marked="center" align="center" component="h2" className={classes.title}>
                                Bronze
                            </Typography>
                        </Grid>
                        {sponsorslist.Bronze.map(key => (
                            <Grid item xs={12} md={8}>
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
