import React, { useState, useEffect,  } from 'react';
import { ThemeProvider, Container, Box, Link } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import withRoot from '../../withRoot';
import Typography from '../../components/Typography';
import { useMarked } from 'use-marked-hook';

const styles = (theme) => ({
    listItem: {
        marginTop: theme.spacing(1),
    },
});

const options = {
    overrides: {
        h1: {
            component: (props) => <Typography gutterBottom variant="h4" {...props} />,
        },
        h2: {
            component: (props) => <Typography gutterBottom variant="h6" {...props} />,
        },
        h3: {
            component: (props) => (
                <Typography gutterBottom variant="subtitle1" {...props} />
            ),
        },
        h4: {
            component: (props) => {
                return (
                    <Typography gutterBottom variant="caption" paragraph {...props} />
                );
            },
        },
        p: {
            component: (props) => <Typography variant="p" paragraph {...props} />,
        },
        a: { component: Link },
        li: {
            component: withStyles(styles)((props) => {
                const { classes, ...other } = props;
                return (
                    <li className={classes.listItem}>
                        <Typography component="span" {...other} />
                    </li>
                );
            }),
        },
    },
};

function ContentFile(props) {
    const path_md = props.href;
    
    const [content, setContent] = useState("");
    
    const html = {
        __html: useMarked(content, { skipSanitize: true } )
    };

    const getMarkdown = () => {
        fetch(path_md)
          .then(res => res.text())
          .then(setContent);
    };

    useEffect(() => {
        getMarkdown();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Box mt={8} mb={12}>
                    <Typography variant="h3" gutterBottom marked="center" align="center">
                        {props.children}
                    </Typography>
                    <Typography variant="body1">
                        <div dangerouslySetInnerHTML={html}/>
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default withRoot(ContentFile);