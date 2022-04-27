import { Fragment } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import PersonIcon from '@mui/icons-material/Person';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export const mainListItems = (
    <Fragment>
        <ListItemButton>
            <ListItemIcon>
                <PersonIcon />
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
        <ListItemButton>
            <ListItemIcon>
                <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary="LinkedIn" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="GitHub" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <TwitterIcon />
            </ListItemIcon>
            <ListItemText primary="Twitter" />
        </ListItemButton>
    </Fragment>
);
