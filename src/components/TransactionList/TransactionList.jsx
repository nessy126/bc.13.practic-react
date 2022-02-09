import TransactionListItem from "../TransactionListItem/TransactionListItem";

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <ul>
      {transactions.map((transaction) => (
        <TransactionListItem
          {...transaction}
          key={transaction.id}
          deleteTransaction={deleteTransaction}
        />
      ))}
    </ul>
  )
}
 
export default TransactionList;