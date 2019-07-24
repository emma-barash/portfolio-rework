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
`;

export const PortBody = styled(HeaderContainer)`
    background-color: gray;
    padding: 0;
    background-color: lightsalmon;
    grid-area: port;
`;