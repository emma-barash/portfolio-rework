import React from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import { 
    GridPage,
    PortBody
} from '../elements/index.js';

const Contact = () => {
    return (
        <GridPage>
           <GridPage>
            <Header />
            <Nav />
            {/* <ProjectPhotos /> */}
            <PortBody>
                Contact Me!
            </PortBody>
            <Footer />
        </GridPage>
        </GridPage>
    );
};

export default Contact;