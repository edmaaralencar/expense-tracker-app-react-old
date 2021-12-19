import { useContext } from 'react'

import { TableBox, TableContainer, TableItem } from './styles'
import { FiPlusSquare, FiDollarSign, FiTrash2 } from 'react-icons/fi'

import TransactionContext from '../../context/TransactionContext'

import { formatCurrency } from '../../utils/format'

const Table = ({ title, onOpenModal, transactions, showButton }) => {
    const { deleteTransaction } = useContext(TransactionContext)

    return (
        <div>
            <TableBox>
                <h1 className="mb-0">{title}</h1>
                {showButton && (
                    <button onClick={() => onOpenModal(true)} type="button">
                        <FiPlusSquare size={20} />
                        Adicionar transação
                    </button>
                )}
            </TableBox>
            <TableContainer>
                {transactions.map((transaction) => (
                    <TableItem key={transaction.id}>
                        <FiDollarSign className="table-item-icon" size={25} />
                        <span className="table-item-category">
                            {transaction.category}
                        </span>
                        <span>{transaction.title}</span>
                        {transaction.type === 'deposit' ? (
                            <span>{formatCurrency(transaction.amount)}</span>
                        ) : (
                            <span>-{formatCurrency(transaction.amount)}</span>
                        )}
                        <FiTrash2
                            onClick={() => deleteTransaction(transaction.id)}
                            className="table-item-icon-trash"
                            size={25}
                        />
                    </TableItem>
                ))}
            </TableContainer>
        </div>
    )
}

export default Table
