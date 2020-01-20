import React from 'react';
import '../../App.css';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import {
  Link,
} from 'react-router-dom';
import {
  isMobileOnly,
} from 'react-device-detect';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100vw',
    fontSize: '1.5rem',
    backgroundColor: '#121212',
  },
  h2: {
    display: 'block',
    fontSize: '1.5em',
    marginBlockStart: '0.83em',
    marginBlockEnd: '0.83em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    fontWeight: 'bold',
    color: '#03a9f4',
    fontFamily: "'Anonymous Pro', monospace",
  },
  content: {
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: "'Open Sans', sans-serif",
  },
  linkBack: {
    textDecoration: 'none',
    color: '#121212',
    backgroundColor: '#03a9f4',
  },
  card: {
    padding: theme.spacing(1),
    minWidth: 275,
    maxWidth: '80vw',
    margin: '1.5rem',
    backgroundColor: '#121212',
    color: '#03a9f4',
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'left',
    backgroundColor: '#03a9f4',
    color: '#000000',
    fontFamily: "'Anonymous Pro', monospace",
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className={classes.root} align="center">
      <h2 className={classes.h2}>
        $ ~/chuka/
        <Link className={classes.linkBack} to="/home">portfolio</Link>
        /
        {isMobileOnly ? <br /> : null}
        who-am-i/
        <span className="blink">_</span>
      </h2>
      <Card className={classes.card}>
        <Paper className={classes.paper}>
          <p className={classes.content}>
            Hey there. My name&apos;s Chuka. I&#39;m currently a sophomore at Vanderbilt University.
            <br />
            My interests are in Software Engineering, Web Development and UI/UX Design.
            <br />
            You can explore my academics and my personal projects by pressing on
            <br />
            the highlighted portfolio above and take a look around!
            <br />
            Oh, and my contact info and social media are below the homepage.
          </p>
        </Paper>
      </Card>
    </div>
  );
}

export default Contact;
