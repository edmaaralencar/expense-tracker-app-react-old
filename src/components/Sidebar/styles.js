import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const SidebarList = styled.nav`
    margin-top: 3rem;

    display: flex;
    flex-direction: column;
    gap: 3.5rem;

    width: ${(props) => (props.isSidebarOpen ? '20rem' : '2.5rem')};

    @media screen and (min-width: 800px) {
        width: 20rem;
    }

    @media screen and (max-width: 800px) {
        display: ${(props) => (props.isSidebarOpen ? 'ative' : 'none')};
        position: absolute;
        z-index: 100;
        background-color: var(--color-background-main);
        min-height: 100vh;
        margin-top: 0;
        padding-top: 3rem;
    }
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1.9rem;
    padding: 0.5rem;
    text-decoration: none;

    span {
        font-size: 2.2rem;
        color: var(--color-sidebar-text);
    }
`
