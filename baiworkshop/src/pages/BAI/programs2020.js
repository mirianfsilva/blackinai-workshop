import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import ContentFile from '../../components/Markdown/readfile';
import theme from '../../theme';
// Import your makdown file
import programsbai2020 from './../../posts/bai2020/Programs2020.md';

function cpf2020() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            {/* href = link from you markdown file */}
            <ContentFile href={programsbai2020}>
                {/* Insert the title page here */}
                Black in AI: Programs 2020
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default cpf2020;