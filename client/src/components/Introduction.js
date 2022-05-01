import { Fragment } from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Title from './Title';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const description = [
    "Hello! My name is Hector Nava, and I'm a member of the Enterprise Products team at Meta.",
    "I focus on the roadmaps, development, and strategy of our internal products, which support Meta developers and business users in processing and integrating data.",
    "I also have a background in full-stack development, focusing on MERN and Python technical stacks.",
    "Learn more about my experience by clicking on the link below. Thank you for visiting my site!"
];

export const Introduction = () => {
    return (
        <Fragment>
            <Title>Introduction</Title>
            <ThemeProvider theme={theme}>
                {description.map((desc) => (
                    <Typography variant="h5" gutterBottom>
                        {desc}
                    </Typography>
                ))}
            </ThemeProvider>
        </Fragment>
    );
}
