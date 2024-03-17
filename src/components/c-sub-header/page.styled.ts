import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    font-size: 52px;
    line-height: 36px;
    margin-bottom: 40px;

    @media screen and (max-width: 904px) {
        font-size: 26px;
        margin-bottom: 20px;
    }
`;

export const Title = styled.div`
    font-weight: 700;
`;

export const Icon = styled.div`
    margin-right: 10px;
`;
