import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    height: 100vh;
    display: flex;
    min-width: 200px;
    background-color: aliceblue;
    flex-direction: column;
`;

export const Container = styled.div`
    padding: 30px 20px 20px 20px;
`;

export const Logo = styled.div`
    font-weight: 900;
    letter-spacing: -0.05em;
`;

export const Title = styled.p`
    font-size: 2.7rem;
    line-height: 1;
    transition-duration: 1s;
    color: rgba(0, 0, 0, 0.8);
`;

export const SubTitle = styled.p`
    font-size: 0.8rem;
    line-height: 1;
    margin-left: 3px;
`;

export const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    margin-top: 50px;
`;

export const SocialContainer = styled.div`
    margin-top: 100px;
`;
