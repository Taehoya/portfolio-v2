import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
    body {
        overflow-x: hidden;
    }
    a {
        all: unset;
    }
    input, textarea {
        outline: none;
        border: none;
    }
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;             
        margin: 0;         
    }
    button {
        cursor: pointer;
        outline: none;
        border: none;
        background-color: inherit;
        &:disabled {
            cursor: not-allowed;
        }
    }
`;
