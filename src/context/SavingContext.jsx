import { createContext, useState, useEffect } from 'react'
import { api } from '../services/api'

const SavingContext = createContext()

export const SavingProvider = ({ children }) => {
    const [savings, setSavings] = useState([])

    useEffect(() => {
        api.get('/savings').then(response => setSavings(response.data))
    }, [])

    const [savingsEdit, setSavingsEdit] = useState({
        item: {},
        edit: false,
    })

    const updateSaving = async (id, updItem) => {
        if (updItem.availableAmount >= updItem.totalAmount) {
            api.delete(`/savings/${id}`, updItem)
            setSavings(savings.filter(saving => saving.id !== id))
            return
        }

        const response = await api.put(`/savings/${id}`, updItem)
        const data = await response.data 

        setSavings(savings.map(item => item.id === id ? {
            ...item, ...data 
        } : item))
    }

    const addSaving = async (saving) => {
        const response = await api.post('/savings', saving)

        setSavings([...savings, response.data])
    }

    return (
        <SavingContext.Provider
            value={{ savings, savingsEdit, addSaving, setSavingsEdit, updateSaving }}
        >
            {children}
        </SavingContext.Provider>
    )
}

export default SavingContext
