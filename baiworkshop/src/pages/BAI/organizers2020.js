import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { ThemeProvider, Container, Box } from '@material-ui/core';
import ContentFile from '../../components/Markdown/readfile';
import theme from '../../theme';
// Import your makdown file
import organizersbai2020 from './../../posts/bai2020/Organizers2020.md';

function organizers2020() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            {/* href = link from you markdown file */}
            <ContentFile href={organizersbai2020}>
                {/* Insert the title page here */}
                Black in AI: Organizers 2020
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default organizers2020;