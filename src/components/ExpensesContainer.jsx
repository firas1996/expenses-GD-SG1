import "./ExpensesContainer.css";
import ExpenseItem from "./ExpenseItem";
import Chart from "./Chart";
import Filter from "./Filter";

const ExpensesContainer = ({ expensesData }) => {
  return (
    <div className="expenses">
      <Filter />
      <Chart expensesData={expensesData} />
      {expensesData.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        );
      })}
    </div>
  );
};

export default ExpensesContainer;
