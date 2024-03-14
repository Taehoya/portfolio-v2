import styled from 'styled-components';
import { motion } from 'framer-motion';
// import Image from "next/image";

export const Container = styled.div`
    width: 408px;
    position: relative;
    overflow: hidden;
    /* background-color: #fff; */
    border-radius: 25px;
    box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);
    cursor: pointer;

    @media screen and (max-width: 1441px) {
        width: 280px;
    }

    @media screen and (max-width: 904px) {
        width: 100%;
    }
`;

export const DescriptionContainer = styled.div`
    margin-top: 20px;
    line-height: 1.5;
`;

export const Content = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 300px;
    /* min-height: 250px; */
`;

export const TitleContainer = styled(motion.div)`
    z-index: 1;
    position: relative;
    /* color: #fff; */
`;

export const Title = styled.div`
    margin: 1.4vmin 0;
`;

export const Description = styled.div``;

export const ThumbNailContainer = styled.div`
    position: relative;
`;

export const Thumbnail = styled.div`
    height: 300px;
    margin-top: 20px;
    /* position: relative; */
    /* position: absolute;
    bottom: 0; */
`;

export const Image = styled.img`
    position: absolute;
    width: 100%;
    display: block;
    height: 100%;
    min-height: 100%;
    border: 0;
`;
