import {createAction} from "@reduxjs/toolkit"

export const addCosts = createAction("transactions/addCosts")
export const addIncomes = createAction("transactions/addIncomes")
export const getCosts = createAction("transactions/getCosts")
export const getIncomes = createAction("transactions/getIncomes")
export const removeIncomes = createAction("transactions/removeIncomes")
export const removeCosts = createAction("transactions/removeCosts")

