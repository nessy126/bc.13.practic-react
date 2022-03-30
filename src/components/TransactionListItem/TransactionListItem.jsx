import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTransactionApi } from "../../api";
import {
  removeCosts,
  removeIncomes,
} from "../../redux/transactions/transactionsActions";
import { getIsLoading } from "../../redux/transactions/transactionSelectors";

const TransactionListItem = ({ transaction, switchEditForm, transType }) => {
  const dispatch = useDispatch();
  const isLoading=useSelector(getIsLoading)

  const delTransaction = ({ id, transType }) => {
    removeTransactionApi({ id, transType }).then(() => {
      transType === "incomes" && dispatch(removeIncomes(id));
      transType === "costs" && dispatch(removeCosts(id));
    });
  };

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const switchMenu = () => setIsOpenMenu((prevIsOpenMenu) => !prevIsOpenMenu);

  const { comment, currency, date, time, total, id, category } =
    transaction;

  return (
    <li>
      <span>date</span>
      <p> {date}</p>
      <span> time</span>
      <p> {time}</p>
      <span>total</span>
      <p>{total}</p>
      <span>category</span>
      <p>{category}</p>
      <span>currency</span>
      <p>{currency}</p>
      <span>comment</span>
      <p>{comment}</p>

      <button onClick={switchMenu} type="button">
        ...
      </button>
      {isOpenMenu && (
        <div>
          <button
            type="button"
            disable={isLoading}
            onClick={() => delTransaction({ id, transType })}
          >
            Delete
          </button>
          <button type="button" onClick={() => switchEditForm(transaction)}>
            Edit
          </button>
        </div>
      )}
    </li>
  );
};

export default TransactionListItem;
