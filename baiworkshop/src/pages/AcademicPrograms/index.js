import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { ThemeProvider, Container, Box } from '@material-ui/core';
import theme from './../../theme';
import withRoot from './../../withRoot';
import Typography from '../../components/Typography';
import Markdown from '../../components/Markdown';
import AcademicPage from './../../posts/AcademicPrograms.md';
import ReactMarkdown from 'react-markdown';
import { render } from 'react-dom';

function AcademicPrograms() {
    return (
        <React.Fragment>
            <Navbar />
                <Container>
                    <Box mt={8} mb={12}>
                        <Typography variant="h3" gutterBottom marked="center" align="center">
                            Academic Programs
                        </Typography>
                        <Markdown/>
                     </Box>
                </Container>
                <Footer />
        </React.Fragment>
    );
}

export default withRoot(AcademicPrograms);