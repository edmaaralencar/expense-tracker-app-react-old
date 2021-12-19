import styled from 'styled-components'

export const SavingsBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    button {
        border: 0;
        padding: 0.8rem 1.2rem;
        border-radius: 0.5rem;
        font-size: 2rem;

        display: flex;
        align-items: center;
        gap: 1.6rem;
    }
`

export const SavingsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
    justify-content: space-between;
    gap: 2rem;
`
