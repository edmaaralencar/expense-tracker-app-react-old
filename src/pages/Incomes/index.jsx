import { useContext } from 'react'

import Table from '../../components/Table'
import Wrapper from '../../components/Wrapper'

import TransactionContext from '../../context/TransactionContext'

const Incomes = () => {
    const { transactions } = useContext(TransactionContext)

    const filteredTransactions = transactions.filter(
        (transaction) => transaction.type === 'deposit'
    )

    return (
        <Wrapper>
            <Table title="Entradas" transactions={filteredTransactions} />
        </Wrapper>
    )
}

export default Incomes
