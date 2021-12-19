import { useState, useContext } from 'react'

import Modal from 'react-modal'
import { toast } from 'react-toastify'

import { Container } from './styles'
import { FiX } from 'react-icons/fi'

import SavingContext from '../../context/SavingContext'

const NewSavingModal = ({ isModalOpen, onHandleModal }) => {
    const { addSaving } = useContext(SavingContext)

    const [formData, setFormData] = useState({
        title: '',
        availableAmount: 0,
        totalAmount: 0,
    })

    const { title, availableAmount, totalAmount } = formData

    const handleChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.id]:
                event.target.id === 'title'
                    ? event.target.value
                    : Number(event.target.value),
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (title && availableAmount && totalAmount) {
            toast.success('Item da poupança adicionada com sucesso')
            onHandleModal(false)
            addSaving({...formData})

            setFormData({
                title: '',
                availableAmount: 0,
                totalAmount: 0,
            })
            return
        }

        toast.error('Preencha todos os campos')
    }

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={() => onHandleModal(false)}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                onClick={() => onHandleModal(false)}
                className="react-modal-close"
            >
                <FiX color="#FFFFFF" size={30} />
            </button>

            <Container onSubmit={handleSubmit}>
                <span>Item da poupança</span>

                <input
                    id="title"
                    placeholder="Título"
                    type="text"
                    onChange={handleChange}
                    value={title}
                />

                <input
                    id="availableAmount"
                    placeholder="Valor disponível"
                    type="number"
                    onChange={handleChange}
                    value={availableAmount}
                />

                <input
                    id="totalAmount"
                    placeholder="Valor total"
                    type="number"
                    onChange={handleChange}
                    value={totalAmount}
                />

                <button className="modal-add-button" type="submit">
                    Adicionar poupança
                </button>
            </Container>
        </Modal>
    )
}

export default NewSavingModal
