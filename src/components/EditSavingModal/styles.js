import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    span {
        color: #FFFFFF;
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    input {
        height: 6.4rem;
        background-color: #3C3C3C;
        color: #DADADA;
        font-size: 1.8rem;
        border-radius: 5px;
        border: 0;
        padding: 0 2.5rem;
        border-radius: .5rem;

        &::placeholder {
            color: #B2B2B2;
        }
    }

    .modal-add-button {
        height: 6.4rem;
        background-color: #12A454;
        border: 0;
        color: #FFFFFF;
        font-size: 2.2rem;
        font-weight: 500;
        border-radius: .5rem;
    }
`

