import { Component } from "react"
import CategoryList from "../CategoryList/CategoryList";

class TransactionForm extends Component {
  state = {
    date: "",
    time: "",
    category: "Еда",
    sum: "",
    curency: "UAH",
    comment: "",
    categoriesList: [],

  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  handleSubmitTransaction = (e) => {
    e.prevantDefault()
    console.log(this.state)
  }

  addCategory = (data) => {
    this.setState((prev => ({categoriesList: [...prev.categoriesList, data]})))
  }



  render() {
    const {date, time, category, sum, curency, comment, categoriesList} = this.state
    return (
      <>
        <select name="transactionType" id="">
          <option value="incomes" name="">
            Доходы
          </option>
          <option value="spends" name="">
            Расходы
          </option>
        </select>
        <form onSubmit={this.handleSubmitTransaction} action="">
          <label>
            <input
              onChange={this.handleChange}
              type="date"
              name="date"
              value={date}
            />
          </label>
          <label>
            <input
              onChange={this.handleChange}
              type="time"
              name="time"
              value={time}
            />
          </label>
          <label>
            Категория
            <input
              onClick={null}
              type="button"
              name="category"
              value={category}
            />
          </label>

          <label>
            Сумма
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="Введите сумму"
              name="sum"
              value={sum}
            />
          </label>
          <label>
            Валюта
            <input
              onChange={this.handleChange}
              type="button"
              name="curency"
              value={curency}
            />
          </label>
          <label>
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="Комментарий"
              name="comment"
              value={comment}
            />
          </label>
          <button type="sunmit">Записать</button>
        </form>
        <CategoryList categoriesList={categoriesList} addCategory={this.addCategory} />
      </>
    )
  }
}

export default TransactionForm
