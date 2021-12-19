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

export const RadioBoxContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`

const colors = {
    green: '#115A32',
    red: '#781F2E'
}

export const RadioBox = styled.button`
    color: #FFFFFF;
    font-size: 1.8rem;
    height: 6.4rem;
    background: transparent;

    transition: background-color .2s;
    
    background-color: ${props => props.isActive ? colors[props.activeColor] : 'transparent'};
    border: ${props => props.isActive ? 'none' : '3px solid #3C3C3C'};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;

    border-radius: .5rem;
`