import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { List, Link, ListItem, ListItemText, CssBaseline, ListItemAvatar, Grid } from '@material-ui/core';
import { Container, Divider, Avatar, Card, Button} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from './../Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.primary.dark,
        fontFamily: theme.typography.h1.fontFamily,
        color: theme.palette.secondary.light,
    },
    container: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        display: 'flex',
    },
    iconsWrapper: {
        height: 90,
    },
    icons: {
        display: 'flex',
    },
    list: {
        margin: 0,
        listStyle: 'none',
        padding: 0,
    },
    listItem: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    chip: {
        marginLeft: theme.spacing(5),
        margin: theme.spacing(1),
        borderRadius: "40px",
    }
}));

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(theme.palette.warning.main),
        backgroundColor: theme.palette.warning.main,
        '&:hover': {
            backgroundColor: theme.palette.warning.main,
        },
    },
}))(Button);

function Copyright() {
    return (
        <React.Fragment>
            {' © '}
            <Link color="inherit" href="/">
                Black in AI
            </Link>{' '}{new Date().getFullYear()}{' '}
        </React.Fragment>
    );
}

function Donate(){
    return (
        <form id='my-donate-form' action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_donations"/>
            <input type="hidden" name="business" value="organizers@blackinai.org"/>
            <input type="hidden" name="lc" value="US"/>
            <input type="hidden" name="item_name" value="Black in AI Fundraiser"/>
            <input type="hidden" name="item_number" value="Thanks for your kind contribution. Funds are used to support the annual BAI Workshops."/>
            <input type="hidden" name="no_note" value="0"/>
            <input type="hidden" name="currency_code" value="USD"/>
            <input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_SM.gif:NonHostedGuest"/>
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
        </form>
    );
}

function Footer(props) {
    const classes = useStyles();

    const socialList = [
        { id: 1, name: "Facebook", link: 'https://www.facebook.com/blackinai', image: <FontAwesomeIcon icon={["fab", "facebook"]} /> },
        { id: 2, name: "Twitter", link: 'https://twitter.com/black_in_ai', image: <FontAwesomeIcon icon={["fab", "twitter"]} /> },
        { id: 3, name: "Instagram", link: 'https://www.instagram.com/blackinai/', image: <FontAwesomeIcon icon={["fab", "instagram"]} /> },
        // { id: 4, name: "Email", link: 'mailto:blackinai-board@googlegroups.com', image: <FontAwesomeIcon icon={["fas", "envelope"]} /> },
    ];

    return (
        <Typography component="footer" className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={5}>
                    <Grid item xs={6} sm={8} md={4}>
                        <Grid container direction="column" justify="flex-end"  spacing={2}>
                            <Grid item>
                                <Grid item className={classes.listItem}>
                                    <Typography style={{ color:'#f8f7f7'}} variant="h5" marked="left" gutterBottom>
                                        BLACK IN AI
                                    </Typography>
                                    <Typography style={{ color:'#f8f7f7'}} variant="body1" marked="left">
                                            Non-profit Organization for Black 
                                            Professionals in Artificial Intelligence.
                                    </Typography>
                                    <br></br>
                                    <Copyright />
                                    <br></br>
                                    <br></br>
                                    <Donate/>
                                    {/* <ColorButton className={classes.chip} size="small" variant="contained">
                                    </ColorButton> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4}>
                        <Typography style={{ color:'#f8f7f7'}} variant="h6" marked="left" gutterBottom>
                            CONTACT US
                        </Typography>
                        <ul className={classes.list} style={{ color:'#f8f7f7'}}>
                            <li className={classes.listItem}>
                                <Typography variant="body1" style={{ color:'#f8f7f7'}} href="/">
                                    General Information: 
                                    <br></br>
                                    blackinai-board@googlegroups.com
                                </Typography>
                            </li>
                            <li className={classes.listItem}>
                                <Typography variant="body1" style={{ color:'#f8f7f7'}} href="/">
                                    Information regarding the 2020 Black in AI Workshop: 
                                    blackinai2020@googlegroups.com
                                </Typography>
                            </li>
                            {/* <li>
                                <Typography style={{ color:'#f8f7f7'}} variant="body1" marked="left" gutterBottom>
                                    blackinai-board@googlegroups.com
                                </Typography>
                            </li> */}
                            <li className={classes.iconsWrapper}>
                                <List className={classes.icons}>
                                    {socialList.map(item => (
                                        <ListItem>
                                            <Link href={item.link}>
                                                {item.image}
                                            </Link>
                                        </ListItem>
                                    ))}
                                </List>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography style={{ color:'#f8f7f7'}} variant="h6" marked="left" gutterBottom>
                            LINKS
                        </Typography>
                        <ul className={classes.list} style={{ color:'#f8f7f7'}}>
                            <li className={classes.listItem}>
                                <Link variant="body1" style={{ color:'#f8f7f7'}} href="/">About Us</Link>
                            </li>
                            <li className={classes.listItem}>
                                <Link variant="body1" style={{ color:'#f8f7f7'}} href="/">Programs</Link>
                            </li>
                            <li className={classes.listItem}>
                                <Link variant="body1" style={{ color:'#f8f7f7'}} href="https://docs.google.com/forms/d/e/1FAIpQLSd85BdKTNiN2ZJnMJPI37dligr0Q-_cs5Ik8d9qYDfkheS5Xw/viewform">Membership</Link>
                            </li>
                            {/* <li className={classes.listItem}>
                                <Link variant="body1" style={{ color:'#f8f7f7'}} href="/">Partnership</Link>
                            </li> */}
                        </ul>
                    </Grid>
                    {/* <Grid item xs={6} sm={4} md={3}>
                        <Typography style={{ color:'#f8f7f7'}} variant="h6" marked="left" gutterBottom>
                            GET UPDATES
                        </Typography>
                        <ul className={classes.list} style={{ color:'#f8f7f7'}}>
                            <li className={classes.listItem}>
                                <Typography style={{ color:'#f8f7f7'}} variant="body1" marked="left" gutterBottom>
                                    Sign up for our newsletter to get updates on our work.
                                </Typography>
                            </li>
                            <li>
                            </li>
                        </ul>
                    </Grid> */}
                </Grid>
            </Container>
        </Typography>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Footer;
