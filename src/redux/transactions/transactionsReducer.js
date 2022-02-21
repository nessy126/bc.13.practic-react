import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { removeIncomes, removeCosts } from "./transactionsActions";
import { addCosts, addIncomes, getTransactions } from "./transactionsOperations"

const costsReducer = createReducer([], {
  [addCosts.fulfilled]: (state, { payload }) => [...state, payload],
  [getTransactions.fulfilled]: (_, { payload: { costs } }) => costs,
  [removeCosts]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
})

const incomesReducer = createReducer([], {
  [addIncomes.fulfilled]: (state, { payload }) => [...state, payload],
  [getTransactions.fulfilled]: (_, { payload: { incomes } }) => incomes,
  [removeIncomes]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
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
})

export const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
  isLoading: isLoadingReducer,
})