import { Component } from "react";

class TransactionListItem extends Component {
  state = {
    isOpenMenu: false,
  }

  switchMenu = () => this.setState((prevState) => ({ isOpenMenu: !prevState.isOpenMenu }))
  render() {
    const {
      comment,
      curency,
      date,
      sum,
      time,
      id,
      deleteTransaction,
      transType,
    } = this.props
    return (
      <li>
        <p>{date}</p>
        <p>{time}</p>
        <p>{sum}</p>
        <p>{curency}</p>
        <p>{comment}</p>
        <button onClick={this.switchMenu} type="button">
          ...
        </button>
        {this.state.isOpenMenu && (
          <div>
            <button type="button" onClick={() => deleteTransaction({id, transType})}>
              Delete
            </button>
            <button type="button" onClick={null}>
              Edit
            </button>
          </div>
        )}
      </li>
    )
  }
}
 
export default TransactionListItem;