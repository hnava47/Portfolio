import { Fragment } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import Title from './Title';

const itemData = [
    {
        name: 'socialmediaapp.gif',
        title: 'Social Media App',
        repo: 'https://github.com/hnava47/SocialMediaAPI'
    },
    {
        name: 'ecommerceapp.gif',
        title: 'E-Commerce App',
        repo: 'https://github.com/hnava47/ECommerceApp'
    },
    {
        name: 'weatherdashboard.gif',
        title: 'Weather Dashboard',
        repo: 'https://github.com/hnava47/WeatherDashboardH6'
    },
    {
        name: 'booksearchengine.gif',
        title: 'Book Search Engine',
        repo: 'https://github.com/hnava47/BookSearchEngine'
    },
    {
        name: 'codequiz.gif',
        title: 'Code Quiz',
        repo: 'https://github.com/hnava47/CodeQuizH4'
    },
    {
        name: 'passwordgenerator.gif',
        title: 'Password Generator',
        repo: 'https://github.com/hnava47/PasswordGeneratorH3'
    }
  ];

export const Project = () => {

    return(
        <Fragment>
            <Title>Projects</Title>
            <ImageList sx={{ width: 'md', height: 450 }} cols={2}>
                {itemData.map((item) => (
                    <ImageListItem key={item.name}>
                        <img
                            src={require(`../images/${item.name}`)}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                component='a'
                                href={`${item.repo}`}
                                target='_blank'
                                aria-label={`Github repo about ${item.title}`}
                            >
                                <GitHubIcon />
                            </IconButton>
                            }
                        />
                    </ImageListItem>
                 ))}
            </ImageList>
        </Fragment>
  );
}

export default Project;
