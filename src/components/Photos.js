import React from 'react';
import Satoko from '../elements/photos/Satoko.png';
import Zoom from 'react-reveal';
import { 
    PhotosContainer,
    Img
} from '../elements/index.js';

const Photos = () => {
    return (
        <PhotosContainer>
            <Zoom duration={6000}>
                <Img src={ Satoko } alt="Satoko's Online Gallery" />
            </Zoom>
        </PhotosContainer>
    );
};

export default Photos;