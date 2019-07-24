import React from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import { 
    GridPage,
    PortBody 
} from '../elements/index.js';

const Portfolio = () => {
    return (
        <GridPage>
            <Header />
            <Nav />
            <PortBody>
                Portfolio Body
            </PortBody>
        </GridPage>
    );
};

export default Portfolio;