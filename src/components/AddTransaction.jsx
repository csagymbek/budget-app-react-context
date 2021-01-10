import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);
  const [income, setIncome] = useState({ incomeText: "", incomeAmount: 0 });
  const { incomeText, incomeAmount } = income;
  const [expense, setExpense] = useState({ expenseText: "", expenseAmount: 0 });
  const { expenseText, expenseAmount } = expense;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
    console.log(income);
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();
    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1,
      };
      // console.log(newIncomeTransaction);
      addIncome(newIncomeTransaction);
      setIncome({
        incomeText: "",
        incomeAmount: 0,
      });
    }
  };

  const onChangeexpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
    console.log(expense);
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();
    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };
      // console.log(newexpenseTransaction);
      addExpense(newExpenseTransaction);
      setExpense({
        expenseText: "",
        expenseAmount: 0,
      });
    }
  };

  return (
    <div className="form-wrapper">
      <form action="" onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            placeholder="Add Income..."
            autoComplete="off"
            onChange={onChangeIncome}
            name="incomeText"
            value={incomeText}
          />
          <input
            type="number"
            placeholder="Amount..."
            autoComplete="off"
            onChange={onChangeIncome}
            name="incomeAmount"
            value={incomeAmount}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form action="" onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            placeholder="Add Expense..."
            autoComplete="off"
            name="expenseText"
            value={expenseText}
            onChange={onChangeexpense}
          />
          <input
            type="number"
            placeholder="Amount..."
            autoComplete="off"
            name="expenseAmount"
            value={expenseAmount}
            onChange={onChangeexpense}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
