import React from 'react';
import '../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {
  Link,
} from 'react-router-dom';
import {
  isMobileOnly,
} from 'react-device-detect';
import CircularProgress from '@material-ui/core/CircularProgress';

import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import LanguageIcon from '@material-ui/icons/Language';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '80vw',
    padding: '25vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '200px',
    // fontSize: '1rem',
    backgroundColor: '#121212',
  },
  titleProgress: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  card: {
    padding: theme.spacing(1),
    minWidth: 275,
    maxWidth: '20vw',
    margin: '1.5rem',
    backgroundColor: '#171f24',
    color: '#ffffff',
  },
  title: {
    fontSize: 14,
    paddingBottom: 7,
  },
  lightGreen: {
    color: '#00ff00',
  },
  grids: {
    boxShadow: 6,
    padding: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  linkBack: {
    textDecoration: 'none',
    color: '#121212',
    backgroundColor: '#03a9f4',
  },
  chips: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'space-between',
    flexWrap: 'wrap',
  },
}));

function Projects() {
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
      <h2 className={classes.h2}>
        $ ~/chuka/
        <Link className={classes.linkBack} to="/home">portfolio</Link>
        /
        {isMobileOnly ? <br /> : null}
        projects/
        <span className="blink">_</span>
      </h2>
      <Grid boxshadow={6} container spacing={4} direction="row" justify="center" alignItems="center">
        <Card className={classes.card}>
          <Grid item>
            <CardContent>
              <div className={classes.titleProgress}>
                <Typography variant="h5" component="h2">
                    Personal Portfolio
                </Typography>
                <CircularProgress variant="static" value={40} color="#ffffff" />
              </div>
              <Typography variant="h5" component="h2">- - - - -</Typography>

              <Typography className={classes.title}>
                  Yep. This is it.
              </Typography>
            </CardContent>
          </Grid>
        </Card>


        <Card className={classes.card}>
          <Grid item>
            <CardContent>
              <div className={classes.titleProgress}>
                <Typography variant="h5" component="h2">
                  Game of Rent
                </Typography>
                <CircularProgress variant="static" value={10} color="#ffffff" />
              </div>
              <Typography variant="h5" component="h2">- - - - -</Typography>

              <Typography className={classes.title}>
                Gamifying the process of affordable housing.
              </Typography>
            </CardContent>
          </Grid>
        </Card>

        <Card className={classes.card}>
          <Grid item>
            <CardContent>
              <div className={classes.titleProgress}>
                <Typography variant="h5" component="h2">
                    Big Spoon
                </Typography>
                <CircularProgress variant="static" value={90} color="#ffffff" />
              </div>
              <Typography variant="h5" component="h2">- - - - -</Typography>
              <Typography className={classes.title}>
                From ingredients to instant recipes.
              </Typography>
            </CardContent>
          </Grid>
        </Card>

        <Card className={classes.card}>
          <Grid item>
            <CardContent>
              <div className={classes.titleProgress}>
                <Typography variant="h5" component="h2">
                    TicTacToe
                </Typography>
                <CheckCircleOutlineIcon style={{ color: '#00ff00', fontSize: '50px', margin: '0px' }} />
              </div>
              <Typography variant="h5" component="h2">- - - - -</Typography>
              <Typography className={classes.title}>
                Simple implementation of the classic game with 2-D array.
              </Typography>
            </CardContent>
          </Grid>
        </Card>

        <Card className={classes.card}>
          <Grid item>
            <CardContent>
              <div className={classes.titleProgress}>
                <Typography variant="h5" component="h2">
                  Sant Academy
                </Typography>
                <CheckCircleOutlineIcon style={{ color: '#00ff00', fontSize: '50px', margin: '0px' }} />
              </div>
              <Typography variant="h5" component="h2">- - - - -</Typography>
              <Typography className={classes.title}>
                Disrupting Education in Mongolia.
              </Typography>
            </CardContent>
          </Grid>
        </Card>

        <Card className={classes.card}>
          <Grid item>
            <CardContent>
              <div className={classes.titleProgress}>
                <Typography variant="h5" component="h2">
                  Pomodoro Clock
                </Typography>
                <CircularProgress variant="static" value={90} color="#ffffff" />
              </div>
              <Typography variant="h5" component="h2">- - - - -</Typography>
              <Typography className={classes.title}>
                Making time management less cluttered
              </Typography>
            </CardContent>
          </Grid>
        </Card>

        <Card className={classes.card}>
          <Grid item>
            <CardContent>
              <div className={classes.titleProgress}>
                <Typography variant="h5" component="h2">
                  AGM Timeline
                </Typography>
                <CheckCircleOutlineIcon style={{ color: '#00ff00', fontSize: '50px', margin: '0px' }} />
              </div>
              <Typography variant="h5" component="h2">- - - - -</Typography>
              <Typography className={classes.title}>
                Live-updated day-of event scheduler.
              </Typography>
            </CardContent>
          </Grid>
        </Card>

        <Card className={classes.card}>
          <Grid item>
            <CardContent>
              <div className={classes.titleProgress}>
                <Typography variant="h5" component="h2">
                  GoPay
                </Typography>
                <CheckCircleOutlineIcon style={{ color: '#00ff00', fontSize: '50px', margin: '0px' }} />
              </div>
              <Typography variant="h5" component="h2">- - - - -</Typography>
              <Typography className={classes.title}>
                Pioneering the cryptocurrency wallet in Mongolia.
              </Typography>
            </CardContent>
          </Grid>
        </Card>

        <Card className={classes.card}>
          <Grid item>
            <CardContent>
              <div className={classes.titleProgress}>
                <Typography variant="h5" component="h2">
                  GoSwitch
                </Typography>
                <CheckCircleOutlineIcon style={{ color: '#00ff00', fontSize: '50px', margin: '0px' }} />
              </div>
              <Typography variant="h5" component="h2">- - - - -</Typography>
              <Typography className={classes.title}>
                A simple cryptocurrency converter.
              </Typography>
            </CardContent>
          </Grid>
        </Card>

        <Card className={classes.card}>
          <Grid item>
            <CardContent>
              <div className={classes.titleProgress}>
                <Typography variant="h5" component="h2">
                  GoTailan
                </Typography>
                <CheckCircleOutlineIcon style={{ color: '#00ff00', fontSize: '50px', margin: '0px' }} />
              </div>
              <Typography variant="h5" component="h2">- - - - -</Typography>
              <Typography className={classes.title}>
                A web template for quarterly financial reports.
              </Typography>
            </CardContent>
          </Grid>
        </Card>

        <Card className={classes.card}>
          <Grid item>
            <CardContent>
              <div className={classes.titleProgress}>
                <Typography variant="h5" component="h2">
                  GoCademy
                </Typography>
                <CheckCircleOutlineIcon style={{ color: '#00ff00', fontSize: '50px', margin: '0px' }} />
              </div>
              <Typography variant="h5" component="h2">- - - - -</Typography>
              <Typography className={classes.title}>
                Educating on blockchain and cryptocurrency.
              </Typography>
            </CardContent>
          </Grid>
        </Card>

        <Card className={classes.card}>
          <Grid item>
            <CardContent>
              <div className={classes.titleProgress}>
                <Typography variant="h5" component="h2">
                    Project A.I.
                </Typography>
                <CheckCircleOutlineIcon style={{ color: '#00ff00', fontSize: '50px', margin: '0px' }} />
              </div>
              <Typography variant="h5" component="h2">- - - - -</Typography>
              <Typography className={classes.title}>
                A web presentation on possible A.I. applications.
              </Typography>
              {/* <div className={classes.chips}>
                <Chip className="chip" icon={<LanguageIcon />} label="HTML" />
                <Chip className="chip" icon={<LanguageIcon />} label="CSS" />
                <Chip className="chip" icon={<LanguageIcon />} label="JS" />
                <Chip className="chip" icon={<LanguageIcon />} label="CSS" />
                <Chip className="chip" icon={<LanguageIcon />} label="JS" />
              </div> */}
            </CardContent>
          </Grid>
        </Card>
      </Grid>
    </div>
  );
}

export default Projects;
