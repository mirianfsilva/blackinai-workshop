import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { ThemeProvider, Container, Box } from '@material-ui/core';
import theme from './../../theme';

function About() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            
            <Footer />
        </ThemeProvider>
    );
}

export default About;