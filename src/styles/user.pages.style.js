import styled from "styled-components";

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    width: 100%;
    margin: auto;
`

export const UserInput = styled.input`
    margin: 10px;
    padding: 10px 10px;
    font-size: 20px;
    background-color: #fff;
    border: 1px solid black;
`

export const UserButton = styled.button`
    background: #1AAE9F;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 20px;
    margin: 20px;
`

export const UserEyeicon = styled.i`
    &:hover{
        color: #aaaaae;
        cursor: pointer;
    }
`

export const MarginName = styled.span`
    margin-left: 48px;
`

export const MarginEmail = styled.span`
    margin-left: 54px;
`