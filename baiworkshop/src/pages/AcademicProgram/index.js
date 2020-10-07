import React from 'react';
import { Box, Container} from '@material-ui/core';
import Markdown from './../../components/Markdown';
import Typography from './../../components/Typography';
import PageAcademic from './../Posts/AcademicPrograms.md';

function AcademicProgramns() {
    return (
        <Container>
            <Box mt={7} mb={12}>
                <Typography variant="h3" gutterBottom marked="center" align="center">
                    Academic Programs
                </Typography>
                <Markdown>{PageAcademic}</Markdown>
            </Box>
        </Container>
    );
}

export default AcademicProgramns;