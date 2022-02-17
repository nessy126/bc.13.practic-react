export const addCosts = (tronsaction) => ({
  type: "transactions/addCosts",
  payload: tronsaction,
})

export const addIncomes = (tronsaction) => ({
  type: "transactions/addIncomes",
  payload: tronsaction,
})

export const getCosts = (tronsactions) => ({
  type: "transactions/getCosts",
  payload: tronsactions,
})
export const getIncomes = (tronsactions) => ({
  type: "transactions/getIncomes",
  payload: tronsactions,
})