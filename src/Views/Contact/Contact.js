import React from 'react';
import '../../App.css';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Img from 'react-image';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import isMobileOnly from 'react-device-detect';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100vw',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'center',
    fontSize: '1.5rem',
    backgroundColor: '#121212',
  },
  profile: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  h2: {
    display: 'block',
    flexGrow: 1,
    fontSize: '1.5em',
    marginBottom: 0,
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
    textAlign: 'center',
    backgroundColor: '#121212',
    color: '#03a9f4',
  },
  wikiProfile: {
    maxWidth: 275,
    backgroundColor: '#03a9f4',
    margin: '1.5rem',
    padding: theme.spacing(4),
    textAlign: 'center',
    fontFamily: "'Anonymous Pro', monospace",
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
      {/* <Card className={classes.wikiProfile}>
        <CardActionArea>
          <Img className={classes.schoolLogo} src="./chuka.jpg" width="200px" crossorigin="anonymous" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Chuka Munkh-Achit
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card> */}
    </div>
  );
}

export default Contact;
