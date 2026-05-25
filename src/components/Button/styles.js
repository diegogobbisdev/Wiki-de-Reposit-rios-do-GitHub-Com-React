import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: #FAFAFA;
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    height: 62px;
    width: 80%;
    max-width: 400px;
    margin: 20px;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover:not(:disabled) {
        background-color: #0969da;
        border-color: #0969da;
        color: #FFFFFF;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(9, 105, 218, 0.3);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        background-color: #FAFAFA40;
    }
`