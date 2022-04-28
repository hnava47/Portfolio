import { Fragment } from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
import Title from './Title';
import python from '../images/python.svg';
import javascript from '../images/javascript.svg';
import react from '../images/react.svg';
import node from '../images/nodejs.svg';
import express from '../images/expressjs.svg';
import html from '../images/html.svg';
import css from '../images/css3.svg';
import bootstrap from '../images/bootstrap.svg';
import materialui from '../images/materialui.svg';
import mysql from '../images/mysql.svg';
import mongodb from '../images/mongodb.svg';
import oracle from '../images/oracle.svg';
import graphql from '../images/graphql.svg';

export const Skills = () => {
  return (
      <Fragment>
          <Title>Skills</Title>
          <Stack
            spacing={2}
            mb={2}
            divider={<Divider orientation="vertical"
            flexItem />}
            direction="row"
            justifyContent="center"
          >
            <Button variant="outlined" style={{ cursor: 'default' }}>
                <img src={python} width="20" height="20" style={{ marginRight: 5 }} alt='Python logo'/>
                Python
            </Button>
            <Button variant="outlined" style={{ cursor: 'default' }}>
                <img src={javascript} width="20" height="20" style={{ marginRight: 5 }} alt='JavaScript logo'/>
                JavaScript
            </Button>
            <Button variant="outlined" style={{ cursor: 'default' }} startIcon={<StorageIcon/>}>SQL</Button>
          </Stack>
          <Stack
            spacing={2}
            mb={2}
            divider={<Divider orientation="vertical"
            flexItem />}
            direction="row"
            justifyContent="center"
          >
            <Button variant="outlined" style={{ cursor: 'default' }}>
                <img src={react} width="20" height="20" style={{ marginRight: 5 }} alt='React logo'/>
                ReactJS
            </Button>
            <Button variant="outlined" style={{ cursor: 'default' }}>
                <img src={node} width="20" height="20" style={{ marginRight: 5 }} alt='Node logo'/>
                NodeJS
            </Button>
            <Button variant="outlined" style={{ cursor: 'default' }}>
                <img src={express} width="20" height="20" style={{ marginRight: 5 }} alt='Express logo'/>
                ExpressJS
            </Button>
          </Stack>
          <Stack
            spacing={2}
            mb={2}
            divider={<Divider orientation="vertical"
            flexItem />}
            direction="row"
            justifyContent="center"
          >
            <Button variant="outlined" style={{ cursor: 'default' }}>
                <img src={html} width="20" height="20" style={{ marginRight: 5 }} alt='HTML logo'/>
                HTML5
            </Button>
            <Button variant="outlined" style={{ cursor: 'default' }}>
                <img src={css} width="20" height="20" style={{ marginRight: 5 }} alt='CSS logo'/>
                CSS3
            </Button>
            <Button variant="outlined" style={{ cursor: 'default' }}>
                <img src={bootstrap} width="20" height="20" style={{ marginRight: 5 }} alt='Bootstrap logo'/>
                Bootstrap
            </Button>
          </Stack>
          <Stack
            spacing={2}
            mb={2}
            divider={<Divider orientation="vertical"
            flexItem />}
            direction="row"
            justifyContent="center"
          >
            <Button variant="outlined" style={{ cursor: 'default' }}>
                <img src={materialui} width="20" height="20" style={{ marginRight: 5 }} alt='MaterialUI logo'/>
                MaterialUI
            </Button>
            <Button variant="outlined" style={{ cursor: 'default' }}>
                <img src={mysql} width="20" height="20" style={{ marginRight: 5 }} alt='MySQL logo'/>
                MySQL
            </Button>
            <Button variant="outlined" style={{ cursor: 'default' }}>
                <img src={mongodb} width="20" height="20" style={{ marginRight: 5 }} alt='MongoDB logo'/>
                MongoDB
            </Button>
          </Stack>
          <Stack
            spacing={2}
            divider={<Divider orientation="vertical"
            flexItem />}
            direction="row"
            justifyContent="center"
          >
            <Button variant="outlined" style={{ cursor: 'default' }}>
                <img src={oracle} width="20" height="20" style={{ marginRight: 5 }} alt='Oracle logo'/>
                Oracle
            </Button>
            <Button variant="outlined" style={{ cursor: 'default' }} startIcon={<ApiIcon/>}>REST API</Button>
            <Button variant="outlined" style={{ cursor: 'default' }}>
                <img src={graphql} width="20" height="20" style={{ marginRight: 5 }} alt='GraphQL logo'/>
                GraphQL
            </Button>
          </Stack>
      </Fragment>
    );
}

export default Skills;
