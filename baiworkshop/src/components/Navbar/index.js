import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { AppBar, Toolbar, SwipeableDrawer, Button} from '@material-ui/core';
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
        flex: 1,
        display: 'flex',
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
        color : "#D8CCCC",
    },
    chip: {
        marginLeft: theme.spacing(5),
        margin: theme.spacing(1),
        borderRadius: "40px",
        paddingTop: theme.spacing(1)
    }
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
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="3" height="3"/>
        </form>
    );
}
function AppAppBar(props) {
    const { classes } = props;

    return (
        <div>
            <AppBar position="fixed" className={classes.colorAppBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.left}>
                        <Link underline="none" className={classes.left} href="/">
                            <img src={logo} width={80} alt="" />
                        </Link>
                    </div>
                    <React.Fragment>
                        <div className={classes.right}>
                            <Link color="inherit" variant="h5" underline="none" className={classes.rightLink}
                                href="/">
                                {'Home'}
                            </Link>
                            <Link color="inherit" variant="h5" underline="none" className={classes.rightLink}
                                href="/academicprograms">
                                {'Academic Programs'}
                            </Link>
                            <Link color="inherit" variant="h5" underline="none" className={classes.rightLink}
                                href="/bai2020">
                                {'BAI 2020'}
                            </Link>
                            <ColorButton className={classes.chip} size="small">
                                <Donate/>
                            </ColorButton>
                        </div>
                    </React.Fragment>
                </Toolbar>
            </AppBar>
            <div className={classes.placeholder} />
        </div>
    );
}

AppAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
