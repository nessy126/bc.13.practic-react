import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getTransactionsApi } from "./api";
// import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";
import {getIncomes, getCosts,} from "./redux/transactions/transactionsActions"

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    getTransactionsApi("costs")
      .then((costs) => dispatch(getCosts(costs)))
      .catch((err) => console.log(err))
    getTransactionsApi("incomes")
      .then((incomes) => dispatch(getIncomes(incomes)))
      .catch((err) => console.log(err))
  }, [dispatch])

  return (
    <div className="App">
      <Switch>
        <Route path="/transactions/:transType">
          <TransactionListPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App ;
