import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Redirect } from "react-router-dom"
import { Route, Switch } from "react-router-dom"
// import "./App.css";
import {Col, Container, Row, ThemeProvider} from "react-bootstrap"
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
    //     <ThemeProvider
    //   breakpoints={['md']}
    // >
    <Container>
      <Row className="justify-content-md-center">
        <Col md={10} xl={12}>
          <Switch>
            <Route path="/transactions/:transType">
              <TransactionListPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Col>
      </Row>
    </Container>
    // </ThemeProvider>
  )
}

export default App
