import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeList = () => {
  const { incomeTransactions, deleteTransaction } = useContext(GlobalContext);
  console.log(incomeTransactions);
  return (
    <div className="transactions transactions-income">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {incomeTransactions?.map(({ incomeText, incomeAmount, id }) => (
          <li className="transaction" key={id}>
            <span className="transaction-text">{incomeText}</span>
            <span className="transaction-text">${incomeAmount}</span>
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
