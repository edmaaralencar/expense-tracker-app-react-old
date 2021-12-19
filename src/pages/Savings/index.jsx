import { SavingsBox, SavingsContainer } from './styles'
import { useContext } from 'react'

import { FiPlusSquare } from 'react-icons/fi'

import Wrapper from '../../components/Wrapper'
import SavingsItem from '../../components/SavingsItem'

import SavingContext from '../../context/SavingContext'

const Savings = ({ onOpenModal }) => {
    const { savings } = useContext(SavingContext)

    return (
        <Wrapper>          
            <SavingsBox>
                <h1 className="mb-0">Poupança</h1>
                <button onClick={() => onOpenModal(true)} type="button">
                    <FiPlusSquare size={20} />
                    Adicionar item
                </button>
            </SavingsBox>

            <SavingsContainer>
                {savings.length === 0 ? (
                    <h1>Nenhum item de poupança</h1>
                ) : (
                    savings.map((saving) => (
                        <SavingsItem showButton key={saving.id} saving={saving} />
                    ))
                )}
            </SavingsContainer>
        </Wrapper>
    )
}

export default Savings
