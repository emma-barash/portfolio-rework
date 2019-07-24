import React from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import { GridPage } from '../elements/index.js';

const Portfolio = () => {
    return (
        <GridPage>
            <Header />
            <Nav />
            Portfolio Body
        </GridPage>
    );
};

export default Portfolio;