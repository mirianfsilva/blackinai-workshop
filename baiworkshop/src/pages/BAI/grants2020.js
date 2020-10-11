import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { ThemeProvider, Container, Box } from '@material-ui/core';
import ContentFile from '../../components/Markdown/readfile';
import theme from '../../theme';
// Import your makdown file
import grantsbai2020 from './../../posts/bai2020/Grants2020.md';

function grants2020() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            {/* href = link from you markdown file */}
            <ContentFile href={grantsbai2020}>
                {/* Insert the title page here */}
                Grants 2020
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default grants2020;