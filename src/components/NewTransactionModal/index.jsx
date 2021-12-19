import { useState, useContext } from 'react'

import Modal from 'react-modal'
import { toast } from 'react-toastify'

import { Container, RadioBoxContainer, RadioBox } from './styles'
import { FiArrowDownCircle, FiArrowUpCircle, FiX } from 'react-icons/fi'
import TransactionContext from '../../context/TransactionContext'

const NewTransactionModal = ({ isModalOpen, onCloseModal }) => {
    const { addTransaction } = useContext(TransactionContext)

    const [type, setType] = useState('deposit')
    const [formData, setFormData] = useState({
        title: '',
        amount: 0,
        category: '',
    })

    const { title, amount, category } = formData

    const handleChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            type,
            [event.target.id]: event.target.id === 'amount' ? Number(event.target.value) : event.target.value
        }))
    }

    const handleSubmit = async event => {
        event.preventDefault()

        if (title && amount && category && type) {
            addTransaction(formData)
            toast.success('Transação adicionada com sucesso')
            onCloseModal(false)

            setFormData({
                title: '',
                amount: 0,
                category: '',
            })
            setType('deposit')
            return
        }

        toast.error('Preencha todos os campos')          
    }

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={() => onCloseModal(false)}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                onClick={() => onCloseModal(false)}
                className="react-modal-close"
            >
                <FiX color="#FFFFFF" size={30} />
            </button>

            <Container onSubmit={handleSubmit}>
                <span>Adicionar transação</span>

                <input
                    id="title"
                    placeholder="Título"
                    type="text"
                    onChange={handleChange}
                    value={title}
                />

                <input
                    id="amount"
                    placeholder="Preço"
                    type="number"
                    onChange={handleChange}
                    value={amount}
                />

                <RadioBoxContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <FiArrowUpCircle color="#12A454" size={25} />
                        Entrada
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <FiArrowDownCircle color="#E52E4D" size={25} />
                        Saída
                    </RadioBox>
                </RadioBoxContainer>

                <input
                    id="category"
                    placeholder="Categoria"
                    type="text"
                    onChange={handleChange}
                    value={category}
                />

                <button className="modal-add-button" type="submit">
                    Adicionar transação
                </button>
            </Container>
        </Modal>
    )
}

export default NewTransactionModal
