import { Component } from "react";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";
// import TransactionForm from "./components/TransactionForm/TransactionForm"

class App extends Component {
  state = {
    activePage: "main", //main || incomes || costs
    transactions: [],
  }

  changePage = (activePage) => this.setState({ activePage, })

  addTransaction = (newTransaction) => {
    this.setState(({ transactions }) => ({
      transactions: [...transactions, newTransaction],
    }))
  }

  render() {
    return (
      <div>
        <h1>React Practic</h1>
        {this.state.activePage === "main" && (
          <MainPage
            changePage={this.changePage}
            addTransaction={this.addTransaction}
          />
        )}
        {this.state.activePage === "incomes" && (
          <TransactionListPage
            changePage={this.changePage}
            transType={"incomes"}
          />
        )}
        {this.state.activePage === "costs" && (
          <TransactionListPage
            changePage={this.changePage}
            transType={"costs"}
          />
        )}
      </div>
    )
  }
}

export default App;
