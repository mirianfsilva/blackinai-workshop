import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import ContentFile from '../../components/Markdown/readfile';
import theme from '../../theme';
// Import your makdown file
import datagrantbai2020 from './../../posts/bai2020/DataGrant2020.md';

function datagrant2020(props) {

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            {/* href = link from you markdown file */}
            <ContentFile href={datagrantbai2020}>
                {/* Insert the title page here */}
                Apply for NeurIPS Registration Assistance and Data Grants
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default datagrant2020;