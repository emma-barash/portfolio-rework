import React from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Photos from './Photos.js';
import { 
    GridPage,
    PortBody 
} from '../elements/index.js';

const Portfolio = () => {
    return (
        <GridPage>
            <Header />
            <Nav />
            <Photos />
            <PortBody>
                Portfolio Body
            </PortBody>
            <Footer />
        </GridPage>
    );
};

export default Portfolio;