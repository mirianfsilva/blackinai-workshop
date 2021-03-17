import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { ThemeProvider } from '@material-ui/core';
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