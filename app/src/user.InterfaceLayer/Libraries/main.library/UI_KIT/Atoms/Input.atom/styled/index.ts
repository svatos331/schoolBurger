import styled from "styled-components";

export const Input = styled.input`
    outline: none;
    display: flex;
    width: 100%;
    color: black;
    font-size: 18px;
    height: 40px;
    padding: 12px;
    gap: 10px;
    border-radius: 12px;
    border: 2px solid #F2F2F3;
    background: #FFF;
    cursor: pointer;


    &:active, &:focus, &:hover{
        border: 2px solid #FFAB08;
    }

    display: flex;
    @media (max-width: 768px) {
        border-radius: 8px;
        font-size: 16px;
        height: 30px;
        padding: 12px;
        border: 1px solid #F2F2F3;
        &:active, &:focus, &:hover{
            border: 1px solid #FFAB08;
        }
    }
    @media (max-width: 426px) {
        font-size: 12px;
        border: 1px solid #F2F2F3;
        height: 20px;
        padding: 8px;
    }
`;

