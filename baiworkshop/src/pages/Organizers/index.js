import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { ThemeProvider, Container, Box } from '@material-ui/core';
import theme from '../../theme';
import TeamMembers from '../../components/TeamMembers';


function Organizers() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <TeamMembers/>
            <Footer />
        </ThemeProvider>
    );
}

export default Organizers;