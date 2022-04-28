import { Fragment } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import image from '../images/headshot.jpeg';

export const mainListItems = (
    <Fragment>
        <ListItemButton>
            <ListItemIcon>
                <Avatar alt="Remy Sharp" src={image} sx={{ width: 30, height: 30 }}/>
            </ListItemIcon>
            <ListItemText primary="Introduction" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="Technical Skills" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <DeveloperBoardIcon />
            </ListItemIcon>
            <ListItemText primary="Development Projects" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ConnectWithoutContactIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
        </ListItemButton>
    </Fragment>
);

export const secondaryListItems = (
    <Fragment>
        <ListSubheader component="div" inset>
        Follow me
        </ListSubheader>
        <ListItemButton
            component="a"
            href="https://www.linkedin.com/in/hector-nava-mba/"
            target="_blank"
        >
            <ListItemIcon>
                <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary="LinkedIn" />
        </ListItemButton>
        <ListItemButton
            component="a"
            href="https://github.com/hnava47"
            target="_blank"
        >
            <ListItemIcon>
                <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="GitHub" />
        </ListItemButton>
        <ListItemButton
            component="a"
            href="https://twitter.com/titonava35"
            target="_blank"
        >
            <ListItemIcon>
                <TwitterIcon />
            </ListItemIcon>
            <ListItemText primary="Twitter" />
        </ListItemButton>
    </Fragment>
);
