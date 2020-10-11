import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { ThemeProvider, Container, Box } from '@material-ui/core';
import ContentFile from '../../components/Markdown/readfile';
import theme from '../../theme';
// Import your makdown file
import sponsorsbai2020 from './../../posts/bai2020/Sponsors2020.md';

function sponsors2020() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            {/* href = link from you markdown file */}
            <ContentFile href={sponsorsbai2020}>
                {/* Insert the title page here */}
                Black in AI: Sponsors 2020
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default sponsors2020;