import { createAsyncThunk } from "@reduxjs/toolkit" 
import { getTransactionsApi, postTransactionApi } from "../../api"

const transformGetTransactions = (data) => Object.entries(data)
  .map(([id, transaction]) => ({ ...transaction, id }))

export const addCosts = createAsyncThunk(
  "transaction/addCosts",
  async (transaction, thunckApi) => {
    try {
      const newTransaction = await postTransactionApi({
        transType: "costs",
        transaction,
      })
      return newTransaction
    } catch (err) {
      return thunckApi.rejectWithValue(err.message)
    }
  }
) 

export const addIncomes = createAsyncThunk(
  "transaction/addIncomes",
  async (transaction, thunckApi) => {
    try {
      const newTransaction = await postTransactionApi({
        transType: "incomes",
        transaction,
      })
      return newTransaction
    } catch (err) {
      return thunckApi.rejectWithValue(err.message)
    }
  }
) 

export const getTransactions = createAsyncThunk(
  "transaction/getTransaction",
  async (_, thunckApi) => {
    try {
      const transactions = await getTransactionsApi()
      console.log(transactions)
      return {
        costs: transactions?.costs
          ? transformGetTransactions(transactions.costs)
          : [],
        incomes: transactions?.incomes
          ? transformGetTransactions(transactions.incomes)
          : [],
      }
    } catch (err) {
      return thunckApi.rejectWithValue(err.message)
    }
  }
) 