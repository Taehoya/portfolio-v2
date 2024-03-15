import styled, { css } from 'styled-components';

export const Container = styled.div`
    @media screen and (min-width: 1260px) {
        display: none;
    }
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    float: right;
    z-index: 9990;
    position: absolute;
    top: 30px;
    left: 20px;
`;

const barSettings = ($active: boolean) => css`
    ${$active &&
    css`
        &:nth-child(1),
        &:nth-child(4) {
            opacity: 0;
        }
        &:nth-child(2) {
            transform: rotate(45deg);
            top: 12px;
        }
        &:nth-child(3) {
            transform: rotate(-45deg);
            top: 12px;
        }
    `}

    ${!$active &&
    css`
        &:nth-child(1) {
            top: 0;
        }
        &:nth-child(2),
        &:nth-child(3) {
            top: 12px;
        }
        &:nth-child(4) {
            top: 24px;
        }
    `}
`;

export const Bar = styled.span<{ $active: boolean }>`
    position: absolute;
    height: 6px;
    border-radius: 3px;
    width: 100%;
    background-color: #111111;
    top: 0;
    transition: 0.2s;
    ${({ $active }) => barSettings($active)}
`;
