import { Fragment } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Title from './Title';
import resume from '../documents/HectorNavaResume.pdf';

let theme = createTheme();

theme.typography.h5 = {
    fontSize: '1.5rem',
    '@media (max-width:992px)': {
        fontSize: '1.3rem'
    },
    '@media (max-width:768px)': {
        fontSize: '1.2rem'
    },
    '@media (max-width:600px)': {
        fontSize: '1.1rem'
    }
}

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
                {description.map((desc, index) => (
                    <Typography variant="h5" gutterBottom key={index}>
                        {desc}
                    </Typography>
                ))}
            </ThemeProvider>
            <Box
                sx={{ mt: 1 }}
            >
                <Button
                    variant='outlined'
                    startIcon={<FileDownloadIcon />}
                    component='a'
                    href={resume}
                    target='_blank'
                >
                    Resume
                </Button>
            </Box>
        </Fragment>
    );
}
