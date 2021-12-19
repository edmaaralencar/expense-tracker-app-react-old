export const formatCurrency = (amount) => {
    const options = { style: 'currency', currency: 'BRL' }
    return amount.toLocaleString('pt-BR', options)
}

export const formatIconCategory = (category) => {
    
}

export const formatSavingsCurrency = (amount) => {
    return Math.abs(amount) > 999 
      ? `R$ ${Math.sign(amount) * ((Math.abs(amount) / 1000).toFixed(1))}K`
      : `R$ ${Math.sign(amount) * Math.abs(amount)}`
}