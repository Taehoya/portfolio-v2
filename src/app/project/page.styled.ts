import styled from 'styled-components';

export const ContainerWrapper = styled.div`
    margin-left: 320px;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.gray};

    @media screen and (max-width: 1260px) {
        margin-left: 0;
    }
`;

export const Container = styled.div``;

export const ProjectContainer = styled.div`
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;

    @media screen and (max-width: 1600px) {
        max-width: 952px;
    }

    @media screen and (max-width: 904px) {
        width: 364px;
        padding-left: 24px;
        padding-right: 24px;
    }
`;

export const ProjectList = styled.ul`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 904px) {
        flex-wrap: wrap;
    }
`;
