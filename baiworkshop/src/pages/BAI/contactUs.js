import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Typography from '../../components/Typography';
import { ThemeProvider, Container, Box, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ContentFile from '../../components/Markdown/readfile';
import theme from '../../theme';
// Import your makdown file
import contactus from './../../posts/bai2020/ContactUs.md';

function contactUs(props) {

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            {/* href = link from you markdown file */}
            <ContentFile href={contactus}>
                {/* Insert the title page here */}
                Black in AI Contacts
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default contactUs;