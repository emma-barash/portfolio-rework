import React from 'react';
// import Header from './components/Header.js';
import Portfolio from './components/Portfolio.js';
// import Nav from './components/Nav.js';
import './elements/App.css';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
           <Switch>
               <Route exact path="/" component={ Portfolio } />
           </Switch>
        </div>
    );
};

export default App;