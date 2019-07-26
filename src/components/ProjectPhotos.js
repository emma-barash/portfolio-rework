import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Satoko from '../elements/photos/Satoko.png';
import { 
    PhotosContainer,
    ClickImg 
} from '../elements/index.js';

const ProjectPhotos = () => {
    return (
        <PhotosContainer>
            <Zoom>
                <ClickImg src={ Satoko } alt="Satoko's Online Gallery" />
            </Zoom>
        </PhotosContainer>
    );
};

export default ProjectPhotos;