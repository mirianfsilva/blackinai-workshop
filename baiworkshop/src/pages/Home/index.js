import React from 'react';
import Navbar from '../../components/Navbar';
import SectionNavbars from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './../../theme';
import Header from '../../components/Header';
import CommunityValues from '../../components/CommunityValues';
import TeamMembers from '../../components/TeamMembers';
import AcademicProgram from '../../components/AcademicPrograms';
import RelatedOrganizations from '../../components/RelatedOrganizations';
import CallForPapers2020 from '../../components/CallForPapers2020';

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SectionNavbars />
            <Navbar/>
            <Header/>
            <CallForPapers2020/>
            <CommunityValues/>
            <AcademicProgram/>
            {/* <TeamMembers/> */}
            <RelatedOrganizations/>
            <Footer/>
        </ThemeProvider>
    );
}

export default Home;