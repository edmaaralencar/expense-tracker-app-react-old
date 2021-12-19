import { useEffect, useState, useContext } from 'react'

import Modal from 'react-modal'
import { toast } from 'react-toastify'

import { Container } from './styles'
import { FiX } from 'react-icons/fi'

import SavingContext from '../../context/SavingContext'

const EditSavingModal = ({ isModalOpen, onHandleModal }) => {
    const { savingsEdit, updateSaving, setSavingsEdit } =
        useContext(SavingContext)

    const [formData, setFormData] = useState({
        title: '',
        availableAmount: 0,
        totalAmount: 0,
    })

    useEffect(() => {
        if (savingsEdit.edit) {
            onHandleModal(true)
            setFormData({ 
                title: savingsEdit.item.title,
                availableAmount: savingsEdit.item.availableAmount,
                totalAmount: savingsEdit.item.totalAmount,
             })
        }
    }, [onHandleModal, savingsEdit])

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
            if (savingsEdit.edit === true) {
                updateSaving(savingsEdit.item.id, {
                    ...formData,
                    id: savingsEdit.item.id,
                })
                setFormData({
                    title: '',
                    availableAmount: 0,
                    totalAmount: 0,
                })
                onHandleModal(false)
                toast.success('Item da poupança modificado com sucesso')
                setSavingsEdit({ item: {}, edit: false })
                return
            }
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
                    Salvar modificações
                </button>
            </Container>
        </Modal>
    )
}

export default EditSavingModal
