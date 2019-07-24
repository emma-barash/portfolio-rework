import React from 'react';
import Header from './components/Header.js';
import Portfolio from './components/Portfolio.js';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
           <Header />
           <Switch>
               <Route exact path="/" component={ Portfolio } />
           </Switch>
        </div>
    );
};

export default App;