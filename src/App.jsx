import { Component, useState, useEffect } from "react";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";
// import TransactionForm from "./components/TransactionForm/TransactionForm"
import { getTransactionAPI, deleteTransactionAPI } from "./services/api"

const App = () => {

  const [activePage, setActivePage] = useState("main");
  const [costs, setCosts ] = useState([])
  const [incomes, setIncomes] = useState([])
  
  const changePage = (activePage) => {
    setActivePage(activePage)
  }

  const addTransaction = (newTransaction) => {
    const transType = newTransaction.transType

    transType === "costs" && setCosts(prev => [...prev, newTransaction])

    if (transType === "incomes") {
      setIncomes(prev => [...prev, newTransaction])
    }
  }

  const deleteTransaction = ({id, transType}) => {
    deleteTransactionAPI({ id, transType }).then((res) => {
      transType === "costs" && setCosts(prev => prev.filter(el => el.id !== id));
      transType === "incomes" && setIncomes(prev => prev.filter(el => el.id !== id))
    }
    )
  }


  
  useEffect(() => {
    getTransactionAPI("costs")
      .then((costs) => setCosts(costs))
      .catch((err) => console.log(err));
    getTransactionAPI("incomes")
      .then((incomes) => setIncomes(incomes))
      .catch((err) => console.log(err))
  }, [])

  return (
      <div>
        <h1>React Practic</h1>
        {activePage === "main" && (
          <MainPage
            changePage={changePage}
            addTransaction={addTransaction}
          />
        )}
        {activePage === "incomes" && (
          <TransactionListPage
            changePage={changePage}
            transType={"incomes"}
            transactions={incomes}
            deleteTransaction={deleteTransaction}
          />
        )}
        {activePage === "costs" && (
          <TransactionListPage
            changePage={changePage}
            transType={"costs"}
            transactions={costs}
            deleteTransaction={deleteTransaction}
          />
        )}
      </div>
    )
}

 
  

  // componentDidUpdate(prevProps, prevState) {
  //   if ( prevState.transactions !==  this.state.transactions) {
  //       localStorage.setItem('transactions',  JSON.stringify(this.state.transactions))
  //     }
  //   }



export default App;