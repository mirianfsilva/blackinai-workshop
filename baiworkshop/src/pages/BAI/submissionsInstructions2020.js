import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import ContentFile from '../../components/Markdown/readfile';
import theme from '../../theme';
// Import your makdown file
import instructionsbai2020 from './../../posts/bai2020/SubmissionsInstructions2020.md';

function submissions2020() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            {/* href = link from you markdown file */}
            <ContentFile href={instructionsbai2020}>
                Black in AI: Submission Instructions
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default submissions2020;