import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { removeIncomes, removeCosts } from "./transactionsActions";
import {
  addCosts,
  addIncomes,
  editTransaction,
  getTransactions,
  removeTransactions,
} from "./transactionsOperations"

const costsReducer = createReducer([], {
  [addCosts.fulfilled]: (state, { payload }) => [...state, payload],
  [getTransactions.fulfilled]: (_, { payload: { costs } }) => costs,
  [removeTransactions.fulfilled]: (state, { payload }) => {
    const { id, transType } = payload;
  return transType === "costs" ? state.filter((el) => el.id !== id) : state
  },
  [editTransaction.fulfilled]: (state, { payload }) => {
    const {transType, transaction} = payload;
    return  transType === "costs" ? state.map(el => el.id === transaction.id ? transaction : el) : state
  }
    
})

const incomesReducer = createReducer([], {
  [addIncomes.fulfilled]: (state, { payload }) => [...state, payload],
  [getTransactions.fulfilled]: (_, { payload: { incomes } }) => incomes,
  [removeTransactions.fulfilled]: (state, { payload }) => {
    const { id, transType } = payload;
    return transType === "incomes" ? state.filter((el) => el.id !== id) : state;
  },
  [editTransaction.fulfilled]: (state, { payload }) => {
    const {transType, transaction} = payload;
    return transType === "incomes" ? state.map(el => el.id === transaction.id ? transaction : el) : state
  }
    
})

const isLoadingReducer = createReducer(false, {
  [addCosts.pending]: () => true,
  [addCosts.fulfilled]: () => false,
  [addCosts.rejected]: () => false,
  [addIncomes.pending]: () => true,
  [addIncomes.fulfilled]: () => false,
  [addIncomes.rejected]: () => false,
  [getTransactions.pending]: () => true,
  [getTransactions.fulfilled]: () => false,
  [getTransactions.rejected]: () => false,
  [removeTransactions.pending]: () => true,
  [removeTransactions.fulfilled]: () => false,
  [removeTransactions.rejected]: () => false,
})

export const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
  isLoading: isLoadingReducer,
})