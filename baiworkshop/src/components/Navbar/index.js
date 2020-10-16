import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from './../Typography';
import { Link, Hidden, Drawer, IconButton, List , ListItem} from '@material-ui/core/';
import { AppBar, Toolbar, SwipeableDrawer, Button, Menu, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './../../assets/img/bai-logo.png';

export const toolbarStyles = (theme) => ({
    root: {
        height: 70,
        [theme.breakpoints.up('sm')]: {
            height: 50,
        },
    },
});

const styles = (theme) => ({
    title: {
        fontSize: 24,
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
        justifyContent: 'space-between',
        backgroundColor: theme.palette.primary.light,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }  
    },
    left: {
        flex: 1,
        color: theme.palette.primary.light,
        marginLeft: theme.spacing(10),
    },
    leftLinkActive: {
        color: theme.palette.primary.light,
    },
    right: {
        // flex: 1,
        display: 'flex',
        marginRight: theme.spacing(10),
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.primary.dark,
        marginLeft: theme.spacing(5),
        paddingTop: theme.spacing(2),
    },
    linkSecondary: {
        color: theme.palette.secondary.primary,
    },
    flex: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }
    },
    colorAppBar: {
        color: "#D8CCCC",
    },
    chip: {
        marginLeft: theme.spacing(5),
        margin: theme.spacing(1),
        borderRadius: "40px",
        paddingTop: theme.spacing(1)
    },
    iconContainer: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }   
    },
});

const ColorButton = withStyles((theme) => ({
    root: {
        color: "#fff",
        backgroundColor: "#fff",
        '&:hover': {
            backgroundColor: "#fff",
        },
    },
}))(Button);

function Donate() {
    return (
        <form id='my-donate-form' action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="organizers@blackinai.org" />
            <input type="hidden" name="lc" value="US" />
            <input type="hidden" name="item_name" value="Black in AI Fundraiser" />
            <input type="hidden" name="item_number" value="Thanks for your kind contribution. Funds are used to support the annual BAI Workshops." />
            <input type="hidden" name="no_note" value="0" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_SM.gif:NonHostedGuest" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="paypal button for donations" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="3" height="3" />
        </form>
    );
}
function Navbar(props) {
    const { classes } = props;

    const navLinks = [
        {
            text: 'Home',
            path: '/',
        },
        {
            text: 'Academic Programs',
            path: '/academicprograms',
        },
        {
            text: 'BAI 2020 Workshop',
            path: '/cpfbai2020',
        },
        {
            text: 'Contact Us',
            path: '/contact',
        },
        {
            text: 'Organizers',
            path: '/organizers',
        },
    ]

    const [mobileOpen, setMobileOpen] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setMobileOpen({ ...mobileOpen, [anchor]: open });
    };


    const list = (anchor) => (
        <div className={clsx(classes.list, { [classes.fullList]: anchor === 'top' || anchor === 'bottom',})}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}>
            <div className={classes.right}>{brandComponent}</div>        
            <List>
                {navLinks.map((link, index) =>
                    <ListItem>
                        <Link color="inherit" variant="h5" underline="none" className={classes.rightLink}
                            href={link.path}>
                            {link.text}
                        </Link>
                    </ListItem> 
                )}
                <ColorButton className={classes.chip} size="small">
                    <Donate />
                </ColorButton>
            </List>
        </div>
    );

    const brandComponent = <Link underline="none" className={classes.left} href="/"><img src={logo} width={80} alt="The raised fist, the black in AI logo."/></Link>;


    return (
        <div>
            <AppBar position="fixed" className={classes.colorAppBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.left}>{brandComponent}</div>
                    <React.Fragment>
                        <div className={classes.right}>
                            {navLinks.map((link, index) =>
                                <Link color="inherit" variant="h5" underline="none" className={classes.rightLink}
                                    href={link.path}>
                                    {link.text}
                                </Link>
                            )}
                            <ColorButton className={classes.chip} size="small">
                                <Donate />
                            </ColorButton>
                        </div>            
                    </React.Fragment>
                </Toolbar>
                <div className={classes.iconContainer}>
                    <React.Fragment key='right'>
                        <IconButton color="#e8f6fb" aria-label="open drawer" edge="end" onClick={toggleDrawer('right', true)}
                            className={clsx(mobileOpen && classes.hide)}>
                            <MenuIcon />
                            <div className={classes.left}>{brandComponent}</div>
                        </IconButton>
                        <Drawer anchor='right' open={mobileOpen['right']} onClose={toggleDrawer('right', false)}>            
                            {list('right')}
                        </Drawer>
                    </React.Fragment>
                </div>
                
            </AppBar>
            <div className={classes.placeholder} />
        </div>
    );
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
