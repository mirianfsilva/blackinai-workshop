import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './../../theme';
import Header from '../../components/Header';
import CommunityValues from '../../components/CommunityValues';
import TeamMembers from '../../components/TeamMembers';
import JoinUs from '../../components/JoinUs';
import RelatedOrganizations from '../../components/RelatedOrganizations';

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar/>
            <Header/>
            <CommunityValues/>
            <JoinUs/>
            {/* <TeamMembers/> */}
            <RelatedOrganizations/>
            <Footer/>
        </ThemeProvider>
    );
}

export default Home;