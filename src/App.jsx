import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getTransactionsApi } from "./api";
// import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";
import {getIncomes, getCosts,} from "./redux/transactions/transactionsActions"

const App = ({ getIncomes, getCosts }) => {
  useEffect(() => {
    getTransactionsApi("costs")
      .then((costs) => getCosts(costs))
      .catch((err) => console.log(err))
    getTransactionsApi("incomes")
      .then((incomes) => getIncomes(incomes))
      .catch((err) => console.log(err))
  }, [])

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

const mapDispatchToProps = {
  getIncomes,
  getCosts,
}

export default connect(null, mapDispatchToProps) (App) ;
