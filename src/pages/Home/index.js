import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './../../theme';
import Header from '../../components/Header';
import CommunityValues from '../../components/CommunityValues';
import TeamMembers from '../../components/TeamMembers';
import JoinUs from '../../components/JoinUs';

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar/>
            <Header/>
            <CommunityValues/>
            <TeamMembers/>
            <JoinUs/>
            <Footer/>
        </ThemeProvider>
    );
}

export default Home;