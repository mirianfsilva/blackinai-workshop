import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../theme';
import withRoot from '../../withRoot';
import AcademicPage from './../../posts/baiPrograms/AcademicPrograms.md';
import ContentFile from './../../components/Markdown/readfile';

function AcademicPrograms() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <ContentFile href={AcademicPage}>
                Academic Programs
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(AcademicPrograms);