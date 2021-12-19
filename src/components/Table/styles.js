import styled from 'styled-components'

export const TableBox = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    button {
        border: 0;
        padding: 0.8rem 1.2rem;
        border-radius: 0.5rem;
        font-size: 2rem;

        display: flex;
        align-items: center;
        gap: 1rem;
    }

    @media screen and (max-width: 565px) {
        flex-direction: column;
        gap: 2rem;
    }
`

export const TableContainer = styled.div`
    margin-top: 3.5rem;

    @media screen and (max-width: 575px) {
        overflow-x: scroll;
    }
`

export const TableItem = styled.div`
    border-bottom: 1px solid #c4c4c4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.7rem;

    span {
        margin-bottom: 1.6rem;
        font-size: 2rem;
    }

    .table-item-category {

        font-weight: bold;
    }

    .table-item-icon {
        margin-bottom: 1.6rem;
    }

    .table-item-icon-trash {
        margin-bottom: 1.6rem;
        cursor: pointer;
    }

    @media screen and (max-width: 575px) {
        width: 140%;
    }
`
