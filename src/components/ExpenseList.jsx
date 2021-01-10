import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ExpenseList = () => {
  const { expenseTransactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {expenseTransactions?.map(({ expenseText, id, expenseAmount }) => (
          <li className="transaction" key={id}>
            <span className="transaction-text">{expenseText}</span>
            <span className="transaction-text">${expenseAmount}</span>
            <button
              className="delete-btn"
              onClick={() => deleteTransaction(id)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
