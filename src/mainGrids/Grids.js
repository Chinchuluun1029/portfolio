import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@mdi/react';
import {
 mdiRocket, mdiPacMan, mdiSchoolOutline, mdiFaceOutline, mdiAccountBoxOutline 
} from '@mdi/js';
import 'react-blink-text';
import {
  Link,
} from 'react-router-dom';


import Button from '@material-ui/core/Button';
import { lightBlue } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '10vh 15vw',
    backgroundColor: '#121212',
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    backgroundColor: '#03a9f4',
    color: '#000000',
    fontFamily: "'Anonymous Pro', monospace",
  },
  title: {
    color: '#03a9f4',
    fontFamily: "'Anonymous Pro', monospace",
    paddingBottom: '1.75rem',
  },
  gridName: {
    textDecoration: 'none',
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '3em 25vw 0 25vw',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));


const ColorButton = withStyles(() => ({
  root: {
    color: lightBlue[500],
    height: 64,
    '&:hover': {
      backgroundColor: lightBlue[500],
      color: '#121212',
      boxShadow: 'none',
    },
  },
}))(Button);

export default function Grids() {
  const classes = useStyles();

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className={classes.root}>
      <h2 className={classes.title}>
        $ ~/chuka/portfolio/
        <span className="blink">_</span>
      </h2>
      <Grid boxshadow={6} container spacing={4} direction="row" justify="center" alignItems="center">
        <Grid item>
          <Link to="/about">
            <Paper className={classes.paper} elevation={20}>
              <Icon
                path={mdiPacMan}
                title="About"
                size={6}
                color="#121212"
              />
              <p className={classes.gridName}>who-am-i</p>
            </Paper>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/education" classname={classes.gridName}>
            <Paper className={classes.paper} elevation={20}>
              <Icon
                path={mdiSchoolOutline}
                title="Education"
                size={6}
                color="#121212"
              />
              <p className={classes.gridName}>education</p>
            </Paper>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/projects">
            <Paper className={classes.paper} elevation={20}>
              <Icon
                path={mdiRocket}
                title="Projects"
                size={6}
                color="#121212"
              />
              <p className={classes.gridName}>projects</p>
            </Paper>
          </Link>
        </Grid>
      </Grid>
      <div className={classes.icons}>
        <a href="https://github.com/Chinchuluun1029" rel="noopener noreferrer" target="_blank">
          <ColorButton aria-label="github">
            <GitHubIcon fontSize="large" />
          </ColorButton>
        </a>
        <a href="https://linkedin.com/chinchuluun" rel="noopener noreferrer" target="_blank">
          <ColorButton aria-label="linkedin">
            <LinkedInIcon fontSize="large" />
          </ColorButton>
        </a>
        <a href="https://www.instagram.com/anasiandisgrace/" rel="noopener noreferrer" target="_blank">
          <ColorButton aria-label="instagram">
            <InstagramIcon fontSize="large" />
          </ColorButton>
        </a>
        <a href="mailto:chinchuluunma@gmail.com?Subject=Contact%20from%20Portfolio" target="_top">
          <ColorButton aria-label="email">
            <EmailIcon fontSize="large" />
          </ColorButton>
        </a>
      </div>
    </div>
  );
}
