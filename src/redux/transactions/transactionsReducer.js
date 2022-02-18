import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addCosts, addIncomes, getCosts, getIncomes, removeIncomes, removeCosts } from "./transactionsActions";

const costsReducer = createReducer([], {
  [addCosts]: (state, { payload }) => [...state, payload],
  [getCosts]: (_, { payload }) => payload,
  [removeCosts]: (state, { payload }) => state.filter((el) => el.id !== payload),
})

const incomesReducer = createReducer([], {
  [addIncomes]: (state, { payload }) => [...state, payload],
  [getIncomes]: (_, { payload }) => payload,
  [removeIncomes]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
})

export const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
})