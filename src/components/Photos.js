import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Emma from '../elements/photos/portImageCopy.jpg';
import {
    PhotosContainer,
    Img
} from '../elements/index.js';


class Photos extends Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }

    showCounter = () => {
        
    }

    render() {
        const { show } = this.state
        return (
            <PhotosContainer>
                <Zoom when={ show }>
                    <img src={Emma} alt="Emma Barash" />
                </Zoom>
            </PhotosContainer>
        );
    };
}

export default Photos;