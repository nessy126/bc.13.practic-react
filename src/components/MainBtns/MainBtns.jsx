import { Link } from "react-router-dom";

function MainBtns() {
  return (
    <>
      <Link className="link" to={"/transactions/incomes"} type="button">
        Incomes
      </Link>
      <Link className="link" to={"/transactions/costs"}>
        Costs
      </Link>
    </>
  );
}

export default MainBtns;
