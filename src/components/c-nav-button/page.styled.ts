import styled from 'styled-components';

export const Button = styled.button<{ $isActive: Boolean }>`
    color: ${({ $isActive }) => ($isActive ? 0 : 2)}px solid #ced0db;
    display: flex;
    padding: 12px;
    font-weight: 300;
    transition-duration: 1s;
    color: rgba(0, 0, 0, 0.25);

    &:hover {
        color: #000;
    }
`;

export const Icon = styled.div`
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.p`
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
`;
