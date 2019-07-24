import styled from 'styled-components';

export const HeaderContainer = styled.div`
    grid-area: h;
    text-align: center;
    background-color: lightblue;
    padding: 25px;
    border: 1px solid blue;
`;

export const NavBar = styled(HeaderContainer)`
    background-color: lightcoral;
    padding: 0;
    grid-area: nb;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const PortBody = styled(HeaderContainer)`
    background-color: gray;
    padding: 0;
    background-color: lightsalmon;
    grid-area: port;
`;

export const FooterContainer = styled(HeaderContainer)`
    grid-area: foot;
`;

export const PhotosContainer = styled(HeaderContainer)`
    grid-area: photos;
    display: flex;
    background-color: whitesmoke;
    flex-flow: row wrap;
`;