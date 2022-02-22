import { useState } from "react";
import CategoryList from "../CategoryList/CategoryList";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addCosts,
  addIncomes,
  editTransaction,
} from "../../redux/transactions/transactionsOperations"


const initialForm = {
  date: "2022-02-22",
  time: "",
  category: "eat",
  currency: "UAH",
  comment: "",
  total: "",
};

const TransactionForm = ({ setIsEdit, editingTransaction }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const match = useRouteMatch()

  const [form, setForm] = useState(() =>
    editingTransaction ? editingTransaction : initialForm
  )
  const [transType, setTransType] = useState("costs")

  const handleChangeForm = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const openCategoryList = () => {
    history.push(
      match.url === "/" ? "/categories-list" : match.url + "/categories-list"
    )
  }

  const handleChangeTransType = (e) => {
    const { value } = e.target
    setTransType(value)
  }

  const handleSubmitTrans = (e) => {
    e.preventDefault()
    if (editingTransaction) {
      dispatch(editTransaction({ transaction: form, transType }))
      setIsEdit(false)
    } else {
      transType === "incomes" && dispatch(addIncomes(form))
      transType === "costs" && dispatch(addCosts(form))
    }
    setForm(initialForm)
  }

  const setCategory = (newCategory) => {
    setForm((prevForm) => ({ ...prevForm, category: newCategory }))
    history.goBack()
  }

  const { date, time, category, total, currency, comment } = form

  return (
    <Switch>
       <Route path={match.path} exact>
        <select
          name="transType"
          onChange={handleChangeTransType}
          value={transType}
        >
          <option value="incomes">Incomes</option>
          <option value="costs">Costs</option>
        </select>
        <form onSubmit={handleSubmitTrans}>
          <label>
            Day
            <input
              name="date"
              type="date"
              value={date}
              onChange={handleChangeForm}
            />
          </label>

          <label>
            Time
            <input
              name="time"
              type="time"
              value={time}
              onChange={handleChangeForm}
            />
          </label>

          <label>
            Category
            <input
              name="category"
              type="button"
              value={category}
              onClick={openCategoryList}
            />
          </label>

          <label>
            Total
            <input
              name="total"
              type="text"
              placeholder="Enter sum"
              value={total}
              onChange={handleChangeForm}
            />
          </label>

          <label>
            Currency
            <input
              name="currency"
              type="button"
              value={currency}
              onClick={null}
            />
          </label>

          <label>
            <input
              name="comment"
              type="text"
              placeholder="Comment"
              value={comment}
              onChange={handleChangeForm}
            />
          </label>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </Route>
      <Route
        path={
          match.path === "/"
            ? "/categories-list"
            : match.path + "/categories-list"
        }
      >
        <CategoryList setCategory={setCategory} transType={transType} />
      </Route>
    </Switch>
  )
}

export default TransactionForm;
