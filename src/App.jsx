import { Component } from "react";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";
// import TransactionForm from "./components/TransactionForm/TransactionForm"
import { getTransactionAPI, deleteTransactionAPI } from "./services/api"

class App extends Component {
  state = {
    activePage: "main", //main || incomes || costs
    costs: [],
    incomes: []
  }

  changePage = (activePage) => this.setState({ activePage, })

  addTransaction = (newTransaction) => {
    const transType = newTransaction.transType
    this.setState((prev) => ({
      [transType]: [...prev[transType], newTransaction],
    }))
  }

  deleteTransaction = ({id, transType}) => {
    deleteTransactionAPI({ id, transType }).then((res) =>
      this.setState((prev) => ({
        [transType]: prev[transType].filter((el) => el.id !== id),
      }))
    )
  }
  componentDidMount() {
    getTransactionAPI("costs")
      .then((costs) => this.setState({ costs }))
      .catch((err) => console.log(err))
    getTransactionAPI("incomes")
      .then((incomes) => this.setState({ incomes }))
      .catch(err => console.log(err))
    
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if ( prevState.transactions !==  this.state.transactions) {
  //       localStorage.setItem('transactions',  JSON.stringify(this.state.transactions))
  //     }
  //   }


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
            transactions={this.state.incomes}
            deleteTransaction={this.deleteTransaction}
          />
        )}
        {this.state.activePage === "costs" && (
          <TransactionListPage
            changePage={this.changePage}
            transType={"costs"}
            transactions={this.state.costs}
            deleteTransaction={this.deleteTransaction}
          />
        )}
      </div>
    )
  }
}

export default App;