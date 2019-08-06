import React from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import { 
    GridPage,
    PortBody
} from '../elements/index.js';

const About = () => {
    return (
        <GridPage>
           <GridPage>
            <Header />
            <Nav />
            {/* <ProjectPhotos /> */}
            <PortBody>
                About Moi!
            </PortBody>
            <Footer />
        </GridPage>
        </GridPage>
    );
};

export default About;