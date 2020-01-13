import React from 'react';
import './App.css';

import Img from 'react-image';

import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';


import Grids from './mainGrids/Grids';

import Education from './Views/Education/Education';
import Projects from './Views/Projects/Projects';
import Contact from './Views/Contact/Contact';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Grids />
          </Route>
          <Route path="/education">
            <Education />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route
            exact
            path="/"
            render={() => (
              <Redirect to="/home" />
            )}
          />

          <Route>
            <div style={{ backgroundImage: './yoda.gif' }}>
              <Img width="500px" src="./yoda.gif" crossorigin="anonymous" />
              <p>Error: 2020/5</p>
              <p>
are you lost? let&rsquo;s get you back
                <Link to="/home">home</Link>
                {' '}
                <br />
                {' '}
or
                {' '}
                <br />
                {' '}
let&rsquo;s play a
                {' '}
                <a href="https://findtheinvisiblecow.com/">little game</a>
                {' '}
(not made by me*)
              </p>
            </div>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
