import React from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import ProjectPhotos from './ProjectPhotos.js';
import Photos from './Photos.js';
import { 
    GridPage,
    PortBody 
} from '../elements/index.js';


const Projects = () => {
    return (
        <GridPage>
        <Header />
    <Nav />
    <ProjectPhotos />
    <PortBody>
        Portfolio Body
    </PortBody>
    <Footer />
</GridPage>
    );
};

export default Projects;