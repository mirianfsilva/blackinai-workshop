import React from 'react';
import Navbar from '../../components/Navbar';
import SectionNavbars from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './../../theme';
import Header from '../../components/Header';
import CommunityValues from '../../components/CommunityValues';
import AcademicProgram from '../../components/AcademicPrograms';
import RelatedOrganizations from '../../components/RelatedOrganizations';
import CallForPapers2020 from '../../components/CallForPapers2020';
import MeetOrganizers from '../../components/MeetOrganizers';
import Sponsors from '../../components/Sponsors';

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SectionNavbars />
            <Navbar/>
            <CallForPapers2020/>
            <Header/>
            <CommunityValues/>
            <AcademicProgram/>
            <MeetOrganizers/>
            <RelatedOrganizations/>
            <Sponsors/>
            <Footer/>
        </ThemeProvider>
    );
}

export default Home;