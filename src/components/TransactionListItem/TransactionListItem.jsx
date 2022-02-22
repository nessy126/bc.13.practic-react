import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getIsLoading } from "../../redux/transactions/transactionSelector"
import { removeTransactions } from "../../redux/transactions/transactionsOperations"

const TransactionListItem = ({ transaction, switchEditForm, transType }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const switchMenu = () => setIsOpenMenu((prevIsOpenMenu) => !prevIsOpenMenu)

  const { comment, currency, date, time, total, id, category } =
    transaction

  return (
    <li>
      <span>date</span>
      <p> {date}</p>
      <span> time</span>
      <p> {time}</p>
      <span>total</span>
      <p>{total}</p>
      <span>currency</span>
      <p>{currency}</p>
      <span>comment</span>
      <p>{comment}</p>
      <span>category</span>
      <p> {category}</p>

      <button onClick={switchMenu} type="button">
        ...
      </button>
      {isOpenMenu && (
        <div>
          <button
            type="button"
            onClick={() => dispatch(removeTransactions({ id, transType }))}
            disabled={isLoading}
          >
            Delete
          </button>
          <button type="button" onClick={() => switchEditForm(transaction)}>
            Edit
          </button>
        </div>
      )}
    </li>
  )
}

export default TransactionListItem
