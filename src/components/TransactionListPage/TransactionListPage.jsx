import TransactionList from "../TransactionList/TransactionList";

const TransactionListPage = ({
  changePage,
  transType,
  transactions,
  deleteTransaction,
}) => {
  return (
    <>
      <h1>TransactionListPage</h1>
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
      <button
        onClick={() => {
          changePage("main")
        }}
        type="button"
      >
        Назад
      </button>
    </>
  )
}
 
export default TransactionListPage;
