import { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

const TransactionContext = createContext()

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        api.get('/transactions').then(response => setTransactions(response.data))
    }, [])

    const addTransaction = async (transaction) => {
        const response = await api.post('/transactions', transaction)

        setTransactions([...transactions, response.data])
    }

    const deleteTransaction = async (transactionId) => {
        api.delete(`/transactions/${transactionId}`, transactionId)

        setTransactions(transactions.filter(transaction => transaction.id !== transactionId))
    }

    return (
        <TransactionContext.Provider
            value={{
                transactions,
                addTransaction,
                deleteTransaction
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionContext
