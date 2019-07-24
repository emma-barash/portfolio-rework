import styled from 'styled-components';

export const GridPage = styled.div`
    display: grid;
    width: 100vw;
    height: auto;
    margin: 0;
    padding: 0;
    background-image: linear-gradient(white, white);
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(4, auto);
    background-size: fill;
    grid-template-areas: 
        "h h h h"
    ;
`;