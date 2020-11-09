import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Typography from '../../components/Typography';
import { ThemeProvider, Container, Box, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ContentFile from '../../components/Markdown/readfile';
import theme from '../../theme';
import InvitedSpeakers2020 from '../../components/InvitedSpeakers2020';

function speakers2020(props) {

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <InvitedSpeakers2020/>
            <Footer />
        </ThemeProvider>
    );
}

export default speakers2020;