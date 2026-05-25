import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    max-width: 400px;
    padding: 20px;
    background: #0D1117;
    border: 1px solid #30363D;
    border-radius: 12px;
    margin: 15px 0;
    transition: all 0.3s ease;

    &:hover {
        border-color: #58A6FF;
        box-shadow: 0 4px 12px rgba(88, 166, 255, 0.2);
    }

    h3 {
        font-size: 24px;
        color: #FAFAFA;
        margin: 0 0 8px 0;
    }

    p {
        font-size: 14px;
        color: #8B949E;
        margin: 0 0 16px 0;
    }

    a {
        display: inline-block;
        color: #58A6FF;
        text-decoration: none;
        font-size: 14px;
        transition: all 0.3s ease;
        margin: 8px 16px 8px 0;

        &:hover {
            color: #79C0FF;
            text-decoration: underline;
        }
    }

    hr {
        color: #30363D;
        margin: 16px 0;
        border: none;
        border-top: 1px solid #30363D;
    }
`;

export const RemoveButton = styled.button`
    display: inline-block;
    background: transparent;
    border: 1px solid #DA3633;
    color: #F85149;
    border-radius: 8px;
    padding: 6px 12px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 8px 0;

    &:hover {
        background: rgba(248, 81, 73, 0.1);
        border-color: #F85149;
    }

    &:active {
        background: rgba(248, 81, 73, 0.2);
    }
`