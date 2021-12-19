export const calculateProgressBarWidth = (currentMoney, value) => {
    const percentage = (currentMoney / value) * 100
    return (percentage * 19.5) / 100
}
