import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Modal from 'react-modal'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import NewTransactionModal from './components/NewTransactionModal'
import NewSavingModal from './components/NewSavingModal'
import EditSavingModal from './components/EditSavingModal'

import Home from './pages/Home'
import Incomes from './pages/Incomes'
import Outcomes from './pages/Outcomes'
import Savings from './pages/Savings'

import { TransactionProvider } from './context/TransactionContext'
import { SavingProvider } from './context/SavingContext'

Modal.setAppElement('#root')

const App = () => {
    const [openSidebar, setOpenSidebar] = useState(false)
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
        useState(false)
    const [isNewSavingModalOpen, setIsNewSavingModalOpen] = useState(false)
    const [isEditSavingModalOpen, setIsEditSavingModalOpen] = useState(false)

    return (
        <TransactionProvider>
            <SavingProvider>
                <Router>
                    <Header
                        openSidebar={openSidebar}
                        setOpenSidebar={setOpenSidebar}
                    />

                    <main className="grid">
                        <Sidebar openSidebar={openSidebar} />

                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Home
                                        onOpenModal={
                                            setIsNewTransactionModalOpen
                                        }
                                    />
                                }
                            />
                            <Route path="/incomes" element={<Incomes />} />
                            <Route path="/outcomes" element={<Outcomes />} />
                            <Route
                                path="/savings"
                                element={
                                    <Savings
                                        onOpenModal={setIsNewSavingModalOpen}
                                    />
                                }
                            />
                        </Routes>
                    </main>
                </Router>
                <NewTransactionModal
                    isModalOpen={isNewTransactionModalOpen}
                    onCloseModal={setIsNewTransactionModalOpen}
                />
                <NewSavingModal
                    isModalOpen={isNewSavingModalOpen}
                    onHandleModal={setIsNewSavingModalOpen}
                />
                <EditSavingModal
                    isModalOpen={isEditSavingModalOpen}
                    onHandleModal={setIsEditSavingModalOpen}
                />
                <ToastContainer />
            </SavingProvider>
        </TransactionProvider>
    )
}

export default App
