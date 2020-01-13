import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@mdi/react';
import { mdiRocket, mdiSchoolOutline, mdiAccountBoxOutline } from '@mdi/js';

import 'react-blink-text';

import {
  Link,
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '80vw',
    padding: '25vh',
    backgroundColor: '#121212',
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    backgroundColor: '#00adb5',
    color: '#000000',
    fontFamily: "'Anonymous Pro', monospace",
  },
  title: {
    color: '#00adb5',
    fontFamily: "'Anonymous Pro', monospace",
    paddingBottom: '0.5rem',
  },
  gridName: {
    textDecoration: 'none',

  },
}));


export default function Grids() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>
$ ~/chuka/portfolio/
        <span className="blink">_</span>
      </h2>
      <Grid boxshadow={6} container spacing={4} direction="row" justify="center" alignItems="center">
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
        <Grid item>
          <Link to="/contact">
            <Paper className={classes.paper} elevation={20}>
              <Icon
                path={mdiAccountBoxOutline}
                title="Contact"
                size={6}
                color="#121212"
              />
              <p className={classes.gridName}>contact</p>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
