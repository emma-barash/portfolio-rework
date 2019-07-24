import React from 'react';
import Zoom from 'react-reveal';
import Emma from '../elements/photos/portImageCopy.jpg';
import { 
    PhotosContainer,
    Img
} from '../elements/index.js';

const Photos = () => {
    return (
        <PhotosContainer>
            <Zoom>
                <Img src={ Emma } alt="Emma Barash" />
            </Zoom>
        </PhotosContainer>
    );
};

export default Photos;