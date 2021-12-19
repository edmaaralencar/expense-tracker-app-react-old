import { useContext, useState, useEffect } from 'react'
import Chart from '../../components/Chart'
import SavingsItem from '../../components/SavingsItem'
import Summary from '../../components/Summary'
import Table from '../../components/Table'
import Wrapper from '../../components/Wrapper'
import TransactionContext from '../../context/TransactionContext'

import { generateRandomSavingItem } from '../../utils/generateRandomItem'
import SavingContext from '../../context/SavingContext'

const Home = ({ onOpenModal }) => {
    const { transactions } = useContext(TransactionContext)
    const { savings } = useContext(SavingContext)
    const [saving, setSaving] = useState(generateRandomSavingItem(savings))

    useEffect(() => {
        setSaving(generateRandomSavingItem(savings))
    }, [savings])

    return (
        <Wrapper>
            <div className="top-side">
                <Summary />
                <div>
                    <h1>Poupança</h1>

                    {saving && <SavingsItem saving={saving} />}
                </div>
            </div>
            <div className="bottom-side">
                <Table
                    showButton
                    title="Transações"
                    onOpenModal={onOpenModal}
                    transactions={transactions}
                />

                <Chart />
            </div>
        </Wrapper>
    )
}

export default Home
