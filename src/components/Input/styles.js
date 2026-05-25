import styled from "styled-components";

export const InputContainer = styled.div`
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    height: 62px;
    width: 80%;
    max-width: 400px;
    margin: 20px;
    transition: all 0.3s ease;

    input {
        background: transparent;
        border: 0;
        width: 90%;
        height: 62px;
        padding: 0 20px;
        color: #FFFFFF;
        font-size: 20px;
        outline: none;
        transition: all 0.3s ease;

        &::placeholder {
            color: #FFFFFF80;
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        &:focus {
            color: #FFFFFF;
        }
    }

    &:focus-within {
        border-color: #0969da;
        box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.1);
    }
`