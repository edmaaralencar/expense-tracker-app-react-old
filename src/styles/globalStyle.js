import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-background-main: #1A1A1A;
        --color-background-content: #1F1F1F;
        --color-background-balance: #292929;

        --color-profile: #EDEDED;
        --color-sidebar-text: #FFFFFF;
        --color-content-text: #DEDEDE;

        --sidebar-size-active: 20rem;
        --sidebar-size-default: 2.5rem;

        --color-border-table: #C4C4C4;
    }    

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif
    }

    body {
        background-color: var(--color-background-main);
    }

    html {
        font-size: 62.5%;
    }

    button {
        cursor: pointer;
    }

    .grid {
        margin: 3rem;
        margin-top: 0;

        display: flex;
        gap: 3rem;

        @media screen and (min-width: 800px) and (max-width: 930px) {
            gap: 1rem;
        }
    }

    h1 {
        font-weight: 600;
        font-size: 3.2rem;
        margin-bottom: 2.4rem;
    }

    .bottom-side {
        display: grid;
        grid-template-columns: 4fr 2fr;
        gap: 4rem;
        margin-top: 3rem;

        @media screen and (max-width: 1300px) {
            display: flex;
            flex-direction: column;
        }
    }

    .top-side {
        display: grid;
        grid-template-columns: 4fr 2fr;
        gap: 4rem;

        @media screen and (max-width: 1400px) {
            display: flex;
            flex-direction: column;
        }
    }

    .react-modal-overlay {
        background-color: rgba(0, 0, 0, .5);

        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 5px;
    }

    .react-modal-content {
        background-color: var(--color-background-balance);
        width: 95%;
        max-width: 576px;
        padding: 4rem;
        border-radius: .5rem;
        outline: none;
        position: relative;
    }

    .react-modal-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        border: 0;
        background: transparent;
    }

    .Toastify__toast-body div {
        font-size: 1.5rem;
    }

    .mb-2 {
        margin-top: 2.4rem;
    }

    .mb-0 {
        margin-bottom: 0;
    }

    .cursor {
        cursor: pointer;
    }
`
