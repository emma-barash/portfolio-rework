import styled from 'styled-components';

export const Img = styled.img`
    border-radius: 100%;
    background-color: gray;
    padding: 5px;
    width: 300px;
    height: 300px;
    margin: 10px;
    transition: all 0.3s ease-in-out;
`;

export const ClickImg = styled(Img)`
    transition: all 0.3s ease-in-out;
    &:hover{
            padding: 15px;
            opacity: 0.2;
            cursor: pointer;
        }
`;