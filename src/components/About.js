import React from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Zoom from 'react-reveal/Zoom'
import withBlake from '../elements/photos/withBlake.jpg'
import cpGang from '../elements/photos/cpGang.jpeg'
import GlassesBW from '../elements/photos/GlassesBW.jpeg'
import { 
    GridPage,
    PortBody,
    PhotosContainer,
    WideImg,
    SkinnyImg
} from '../elements/index.js';

const About = () => {
    return (
        <GridPage>
           <GridPage>
            <Header />
            <Nav />
            <PhotosContainer>
                <Zoom>
                    <img src={ withBlake } alt="Blake Hosmer and Emma Barash" />
                    <WideImg src={ cpGang } alt="Seaperch" />
                    <SkinnyImg src={ GlassesBW } alt="Emma Barash" />
                </Zoom>
            </PhotosContainer>
            <PortBody>
                About Moi!
            </PortBody>
            <Footer />
        </GridPage>
        </GridPage>
    );
};

export default About;