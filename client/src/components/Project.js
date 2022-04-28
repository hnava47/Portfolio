import { Fragment } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Title from './Title';

const itemData = [
    {
        name: 'socialmediaapp.gif',
        title: 'Social Media App',
        repo: 'https://github.com/hnava47/SocialMediaAPI',
        url: 'https://socialmediap2.herokuapp.com/'
    },
    {
        name: 'ecommerceapp.gif',
        title: 'E-Commerce App',
        repo: 'https://github.com/hnava47/ECommerceApp',
        url: 'https://ecommerceapp-p3.herokuapp.com/'
    },
    {
        name: 'weatherdashboard.gif',
        title: 'Weather Dashboard',
        repo: 'https://github.com/hnava47/WeatherDashboardH6',
        url: 'https://hnava47.github.io/WeatherDashboardH6/'
    },
    {
        name: 'booksearchengine.gif',
        title: 'Book Search Engine',
        repo: 'https://github.com/hnava47/BookSearchEngine',
        url: 'https://searchengine-hn.herokuapp.com/'
    },
    {
        name: 'codequiz.gif',
        title: 'Code Quiz',
        repo: 'https://github.com/hnava47/CodeQuizH4',
        url: 'https://hnava47.github.io/CodeQuizH4/'
    },
    {
        name: 'passwordgenerator.gif',
        title: 'Password Generator',
        repo: 'https://github.com/hnava47/PasswordGeneratorH3',
        url: 'https://hnava47.github.io/PasswordGeneratorH3/'
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
                                <ButtonGroup>
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        component='a'
                                        href={`${item.url}`}
                                        target='_blank'
                                        aria-label={`Exit to ${item.title}`}
                                    >
                                        <ExitToAppIcon />
                                    </IconButton>
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        component='a'
                                        href={`${item.repo}`}
                                        target='_blank'
                                        aria-label={`Github repo about ${item.title}`}
                                    >
                                        <GitHubIcon />
                                    </IconButton>
                                </ButtonGroup>
                            }
                        />
                    </ImageListItem>
                 ))}
            </ImageList>
        </Fragment>
  );
}

export default Project;
