import { combineReducers } from "redux";

const costsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "transactions/addCosts":
      return [...state, payload];
    case "transactions/getCosts":
      return payload;
    default:
      return state;
  }
}

const incomesReducer = (state = [], { type, payload }) => {
    switch (type) {
      case "transactions/addIncomes":
        return [...state, payload]
      case "transactions/addIncomes":
        return payload;
      default:
        return state
    }
}



export const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
})