import { useContext } from 'react'

import {
    Container,
    ContainerProgression,
    Bar,
    ProgressBar,
    MoneyText,
    SavingsBox,
} from './styles'

import { FiEdit } from 'react-icons/fi'

import { calculateProgressBarWidth } from '../../utils/calculateWidth'
import { formatSavingsCurrency } from '../../utils/format'

import SavingsContext from '../../context/SavingContext'

const SavingsItem = ({ saving, showButton }) => {
    const { setSavingsEdit } = useContext(SavingsContext)

    return (
        <Container>
            <SavingsBox>
                <span>{saving.title}</span>
                {showButton && (
                    <FiEdit
                        onClick={() =>
                            setSavingsEdit({ item: saving, edit: true })
                        }
                        className="cursor"
                        size={25}
                        color="#FFFFFF"
                    />
                )}
            </SavingsBox>
            <ContainerProgression>
                <Bar>
                    <ProgressBar
                        size={calculateProgressBarWidth(
                            saving.availableAmount,
                            saving.totalAmount
                        )}
                    />
                </Bar>
                <MoneyText>
                    <span className="currentMoney">
                        {formatSavingsCurrency(saving.availableAmount)}
                    </span>
                    <span className="totalMoney">/{formatSavingsCurrency(saving.totalAmount)}</span>
                </MoneyText>
            </ContainerProgression>
        </Container>
    )
}

export default SavingsItem
