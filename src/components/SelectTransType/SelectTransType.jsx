import { SelectTranstypeStyled } from "./SelectTransType.styled";

const SelectTransType = ({handleChangeTransType, transType}) => {
  return (
    <>
      <SelectTranstypeStyled
        // sm={3}
  name="transType"
  onChange={handleChangeTransType}
        value={transType}
      >
        <option value="incomes">Incomes</option>
        <option value="costs">Costs</option>
      </SelectTranstypeStyled>
    </>
  )
}
 
export default SelectTransType;