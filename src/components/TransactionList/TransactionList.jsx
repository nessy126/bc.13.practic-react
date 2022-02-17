import { connect } from "react-redux";
import { useTransactionsContext } from "../../context/TransactionsProvider/TransactionsProvider";
import TransactionListItem from "../TransactionListItem/TransactionListItem";

const TransactionList = ({ transType, switchEditForm, transactions }) => {
  return (
    <ul>
      {transactions[transType].map((transaction) => (
        <TransactionListItem
          transaction={transaction}
          key={transaction.id}
          switchEditForm={switchEditForm}
        />
      ))}
    </ul>
  )
}
const mapStateToProps = (state) => {
  return {
    transactions: state.transactions
  }
}

export default connect(mapStateToProps)(TransactionList) ;
