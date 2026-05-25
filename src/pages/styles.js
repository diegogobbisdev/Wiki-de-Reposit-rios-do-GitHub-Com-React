import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, #0D1117 0%, #161B22 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 0;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0 20px 0;
    animation: slideDown 0.6s ease;

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    img {
        filter: drop-shadow(0 4px 12px rgba(88, 166, 255, 0.2));
    }
`;

export const SearchSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin: 20px 0;
    animation: fadeIn 0.8s ease 0.2s both;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        gap: 0;
    }
`;

export const ErrorMessage = styled.div`
    background: #DA3633;
    color: #FFFFFF;
    padding: 12px 20px;
    border-radius: 8px;
    margin: 20px 0;
    font-size: 14px;
    width: 80%;
    max-width: 400px;
    text-align: center;
    border-left: 4px solid #F85149;
    animation: slideInError 0.4s ease;

    @keyframes slideInError {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

export const RepositoriesList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px 20px;
    gap: 10px;

    .empty-state {
        color: #8B949E;
        font-size: 16px;
        margin-top: 50px;
        text-align: center;
    }
`