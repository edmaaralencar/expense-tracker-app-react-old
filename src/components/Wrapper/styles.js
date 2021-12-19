import styled from 'styled-components'

export const Container = styled.div`
    background-color: #1f1f1f;
    color: var(--color-content-text);
    flex: 1;
    border-radius: 25px;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (max-width: 850px) {
        padding: 2.5rem;
    }
`
