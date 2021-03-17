import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import ContentFile from '../../components/Markdown/readfile';
import theme from '../../theme';
// Import your makdown file
import baischedule2020 from './../../posts/bai2020/Schedule2020.md';
// https://www.tablesgenerator.com/html_tables

function schedule2020() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <ContentFile href={baischedule2020}>
                BAI NeurIPS 2020 Schedule
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default schedule2020;