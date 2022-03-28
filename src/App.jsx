import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Redirect } from "react-router-dom"
import { Route, Switch } from "react-router-dom"
// import "./App.css";
import {Container} from "react-bootstrap"
import MainPage from "./components/MainPage/MainPage"
import TransactionListPage from "./components/TransactionListPage/TransactionListPage"
import { getTransactions } from "./redux/transactions/transactionsOperations"
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTransactions())
  }, [dispatch])

  return (
    <Container>

    <div className="App">
      <Switch>
        <Route path="/transactions/:transType">
          <TransactionListPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
    </Container>
  )
}

export default App
