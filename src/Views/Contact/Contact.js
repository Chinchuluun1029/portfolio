import React from 'react';
import '../../App.css';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: '100vw',
    fontSize: '1.5rem',
    backgroundColor: '#121212',
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className={classes.root} align="center">
      <h2 className={classes.title}>
        $ ~/chuka/portfolio/contact/
        <span className="blink">_</span>
      </h2>
      <Paper className={classes.paper}>
        <h1>
            Hello from Contact
        </h1>
      </Paper>
    </div>
  );
}

export default Contact;
