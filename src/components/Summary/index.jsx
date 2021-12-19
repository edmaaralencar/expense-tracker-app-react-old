import { Container, SummaryCard, SummaryText } from './styles'

import { FiDollarSign, FiArrowUp, FiArrowDown } from 'react-icons/fi'
import { useContext } from 'react'

import TransactionContext from '../../context/TransactionContext'

import { formatCurrency } from '../../utils/format'

const Summary = () => {
    const { transactions } = useContext(TransactionContext)

    const total = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'withdraw') {
            return acc + -transaction.amount
        }

        return acc + transaction.amount
    }, 0)

    const incomes = transactions
        .filter(transaction => transaction.type === 'deposit')
        .reduce((acc, transaction) => acc + transaction.amount, 0)

    const outcomes = transactions
        .filter(transaction => transaction.type === 'withdraw')
        .reduce((acc, transaction) => acc + transaction.amount, 0)

    return (
        <div>
            <h1>Dashboard</h1>
            <Container>
                <SummaryCard>
                    <SummaryText>
                        <span>Total</span>
                        <div>
                            <FiDollarSign size={20} color="#000000" />
                        </div>
                    </SummaryText>

                    <h2>{formatCurrency(total)}</h2>
                </SummaryCard>
                <SummaryCard>
                    <SummaryText>
                        <span>Entradas</span>
                        <div>
                            <FiArrowUp size={20} color="#000000" />
                        </div>
                    </SummaryText>

                    <h2>{formatCurrency(incomes)}</h2>
                </SummaryCard>
                <SummaryCard>
                    <SummaryText>
                        <span>Saídas</span>
                        <div>
                            <FiArrowDown size={20} color="#000000" />
                        </div>
                    </SummaryText>

                    <h2>{formatCurrency(outcomes)}</h2>
                </SummaryCard>
            </Container>
        </div>
    )
}

export default Summary
