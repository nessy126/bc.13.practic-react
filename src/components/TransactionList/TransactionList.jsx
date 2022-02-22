import { useSelector } from "react-redux";
import TransactionListItem from "../TransactionListItem/TransactionListItem";

const TransactionList = ({ transType, switchEditForm }) => {
  const transactions = useSelector((state) => state.transactions)

  return (
    <ul>
      {transactions[transType].map((transaction) => (
        <TransactionListItem
          transaction={transaction}
          key={transaction.id}
          switchEditForm={switchEditForm}
          transType={transType}
        />
      ))}
    </ul>
  )
}

export default TransactionList;
