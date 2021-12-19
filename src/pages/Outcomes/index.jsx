import { useContext } from 'react'

import Table from '../../components/Table'
import Wrapper from '../../components/Wrapper'

import TransactionContext from '../../context/TransactionContext'

const Outcomes = () => {
    const { transactions } = useContext(TransactionContext)

    const filteredTransactions = transactions.filter(
        (transaction) => transaction.type === 'withdraw'
    )

    return (
        <Wrapper>
            <Table title="Saídas" transactions={filteredTransactions} />
        </Wrapper>
    )
}

export default Outcomes
