import React from 'react';
// import Header from './components/Header.js';
import Portfolio from './components/Portfolio.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
// import Nav from './components/Nav.js';
import './elements/App.css';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
           <Switch>
               <Route exact path="/"         component={ Portfolio } />
               <Route       path="/projects" component={ Projects }  />
               <Route       path="/contact"  component={ Contact }   />
               <Route       path="/about"  component={ About }   />
           </Switch>
        </div>
    );
};

export default App;