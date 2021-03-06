import React from 'react';
import '../../App.css';
import Img from 'react-image';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import {
  Link,
} from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import {
  isMobileOnly,
} from 'react-device-detect';

import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100vw',
    fontSize: '1.5rem',
    backgroundColor: '#121212',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    margin: '5vh 0',
    backgroundColor: '#03a9f4',
    wordWrap: 'break-word',
    color: '#000000',
    lineHeight: '1.5rem',
    maxWidth: '50%',
    fontFamily: 'monospace',
  },
  schoolLogo: {
    width: '100%',
  },
  title: {
    color: '#03a9f4',
    fontFamily: "'Anonymous Pro', monospace",
    padding: '0.5rem 0',
  },
  linkBack: {
    textDecoration: 'none',
    color: '#121212',
    backgroundColor: '#03a9f4',
  },
  listFont: {
    fontFamily: "'Anonymous Pro', monospace",

  },
}));


function Education() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: true,
  });

  const { open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className={classes.root} align="center">
      <Snackbar
        autoHideDuration={3000}
        open={open}
        onClose={handleClose}
        className={classes.snackbar}
        message="Press on highlighted directory to return"
      />
      <h2 className={classes.title}>
        $ ~/chuka/
        <Link className={classes.linkBack} to="/home">portfolio</Link>
        /
        {isMobileOnly ? <br /> : null}
        education/
        <span className="blink">_</span>
      </h2>
      <Paper className={classes.paper}>
        <Container minWidth="sm">
          {isMobileOnly ? <Img className={classes.schoolLogo} height="75%" src="./vandy-vertical.png" crossorigin="anonymous" /> : <Img className={classes.schoolLogo} src="./vandy.png" crossorigin="anonymous" />}
        </Container>

        <Container className={classes.desc}>

          <p>Major: Computer Science, Applied Mathematics</p>
          <p>Minor: Engineering Management</p>
          <p>Cumulative GPA: 3.15</p>
          <p>Engineering GPA: 3.33</p>
          <p>
            Relevant Coursework:
        {/* <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ThemeProvider theme={theme}>
              <Typography>
                Calculus I, II, III
              </Typography>
        </ThemeProvider>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List> */}


            <ul>
              <li>Calculus I, II, III</li>
              <li>Linear Algebra</li>
              <li>Programming &amp; Problem Solving</li>
              <li>Operating Systems</li>
              <li>Data Structures</li>
              <li>Computer Organisation</li>
              <li>Discrete Structures</li>
              <li>Undergrad Research</li>
              <li>Digital Logic</li>
            </ul>
          </p>
          <p>
            Active Campus Roles:
            <ul>
              <li>Tech Lead @Change++</li>
              <li>Member @VandyApps</li>
              <li>Web Editor @VU-LEARNS</li>
              <li>Student Worker @VUIT</li>
            </ul>
          </p>
        </Container>
      </Paper>
    </div>
  );
}

export default Education;
