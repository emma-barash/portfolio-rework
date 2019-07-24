import React from 'react';
// import Header from './components/Header.js';
import Portfolio from './components/Portfolio.js';
// import Nav from './components/Nav.js';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
           {/* <Header />
           <Nav /> */}
           <Switch>
               <Route exact path="/" component={ Portfolio } />
           </Switch>
        </div>
    );
};

export default App;