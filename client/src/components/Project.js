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
    },
    {
        name: 'ecommerceapp.gif',
        title: 'E-Commerce App'
    },
    {
        name: 'weatherdashboard.gif',
        title: 'Weather Dashboard'
    },
    {
        name: 'booksearchengine.gif',
        title: 'Book Search Engine'
    },
    {
        name: 'codequiz.gif',
        title: 'Code Quiz'
    },
    {
        name: 'passwordgenerator.gif',
        title: 'Password Generator'
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
