import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
    position: relative;
`;

export const Container = styled(motion.nav)<{ $active: boolean }>`
    position: fixed;
    min-width: 230px;
    height: 100vh;
    max-height: 100vh;
    min-width: 200px;
    background-color: aliceblue;
    flex-direction: column;
    z-index: 2;
    top: 0;
    left: 0;
    padding: 30px 20px 20px 20px;

    @media screen and (max-width: 1260px) {
        display: block;
        border-right: 1px solid black;
    }
`;

export const Logo = styled.div`
    font-weight: 900;
    margin-top: 40px;
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
