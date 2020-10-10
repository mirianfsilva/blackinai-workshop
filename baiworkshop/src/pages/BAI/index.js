import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { ThemeProvider, Container, Box } from '@material-ui/core';
import ContentFile from './../../components/Markdown/readfile';
import theme from '../../theme';
import cpf2020 from './../../posts/bai2020/CallForSubmissions2020.md';

function BAI() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <ContentFile href={cpf2020}>
                Black in AI: Call For Submissions 2020
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default BAI;