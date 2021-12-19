import styled from 'styled-components'

export const Container = styled.header`
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 850px) {
        padding: 2rem;
    }
`

export const HeaderLogo = styled.div`
    display: flex;
    gap: 1.5rem;

    .menu {
        cursor: pointer;

        @media screen and (min-width: 800px) {
            display: none;
        }
    }
`

export const HeaderPerfil = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    p {
        color: #ededed;
        font-size: 2rem;
        font-weight: 500;
    }
`
