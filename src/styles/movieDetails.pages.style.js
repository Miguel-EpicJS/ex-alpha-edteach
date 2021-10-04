import styled from "styled-components";


export const MovieImg = styled.img`
    width: 80%;
    height: 80%;
    z-index: -1;
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    text-align:center;
`

export const ImageTextOverlay = styled.div`
    position: absolute; 
    width: 50%; 
    background: #333333cc; 
    color: white; 
    padding: 11.2% 15%; 
    top: 15.3%; 
    left: 10%; 
    font-size: 30px;
`