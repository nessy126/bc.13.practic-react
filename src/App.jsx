import { useEffect } from "react";
import { Col, Container, Row, ThemeProvider } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { getIsAuth } from "./redux/auth/authSelectors";
import { getTransactions } from "./redux/transactions/transactionsOperations";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth)


  // useEffect(() => {
  //   dispatch(getTransactions());
  // }, [dispatch]);
console.log(isAuth);
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={10}>
          {isAuth ? (
            <Switch>
              <Route path="/transactions/:transType">
                <TransactionListPage />
              </Route>
              <Route path="/">
                <MainPage />
              </Route>
              <Redirect to="/" />
            </Switch>
          ) : (
            <Switch>
              <Route path="/register">
                <RegisterPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Redirect to="/login" />
            </Switch>
          )}
        </Col>
      </Row>
    </Container>
  )
};

export default App;
