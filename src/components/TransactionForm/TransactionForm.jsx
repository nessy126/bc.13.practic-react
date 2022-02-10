import { useState } from "react"
import CategoryList from "../CategoryList/CategoryList";
import { postTransactionAPI } from "../../services/api"

const initialForm = {
  date: "2022-02-22",
  time: "",
  category: "Еда",
  sum: "",
  curency: "UAH",
  comment: "",
}

const initialCategoriesList = [
      { id: 1, title: "Еда" },
      { id: 2, title: "Напитки" },
    ]

const TransactionForm = ({ isOpenCategories, toggleOpenCategoryList, addTransaction }) => {
  const [form, setForm] = useState(initialForm);
  const [categoriesList, setCategoriesList] = useState(initialCategoriesList);
  const [transType, setTransType] = useState("costs")


  const handleChangeForm = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleChangeTransTypre = (e) => {
        const { value } = e.target
    setTransType(value)
   }

  const handleSubmitTransaction = (e) => {
    e.preventDefault()
    postTransactionAPI({ transType, transaction: {...form, transType}}).then(data => {
      addTransaction(data)
    })
       setForm(initialForm)
  }

  const addCategory = (data) => {
    setCategoriesList((prev) => [...prev, data])
  }

  const setCategory = (category) => {
    setForm((prev) => ({...prev, category: category}))
    toggleOpenCategoryList()
  }



    const { date, time, category, sum, curency, comment } = form
    return (
      <>
        {!isOpenCategories ? (
          <>
            <select
              name="transType"
              value={transType}
              onChange={handleChangeTransTypre}
            >
              <option value="incomes">Доходы</option>
              <option value="costs">Расходы</option>
            </select>
            <form onSubmit={handleSubmitTransaction} action="">
              <label>
                <input
                  onChange={handleChangeForm}
                  type="date"
                  name="date"
                  value={date}
                />
              </label>
              <label>
                <input
                  onChange={handleChangeForm}
                  type="time"
                  name="time"
                  value={time}
                />
              </label>
              <label>
                Категория
                <input
                  onClick={toggleOpenCategoryList}
                  type="button"
                  name="category"
                  value={category}
                />
              </label>

              <label>
                Сумма
                <input
                  onChange={handleChangeForm}
                  type="text"
                  placeholder="Введите сумму"
                  name="sum"
                  value={sum}
                />
              </label>
              <label>
                Валюта
                <input
                  onChange={handleChangeForm}
                  type="button"
                  name="curency"
                  value={curency}
                />
              </label>
              <label>
                <input
                  onChange={handleChangeForm}
                  type="text"
                  placeholder="Комментарий"
                  name="comment"
                  value={comment}
                />
              </label>
              <button type="sunmit">Записать</button>
            </form>
          </>
        ) : (
          <CategoryList
            categoriesList={categoriesList}
            toggleOpenCategoryList={toggleOpenCategoryList}
            addCategory={addCategory}
            setCategory={setCategory}
          />
        )}
      </>
    )
  }

export default TransactionForm
