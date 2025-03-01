import "./ExpensesContainer.css";
import ExpenseItem from "./ExpenseItem";
import Chart from "./Chart";
import Filter from "./Filter";

const ExpensesContainer = ({ expensesData }) => {
  const years = [
    "All",
    ...new Set(expensesData.map((el) => el.date.getFullYear()).sort()),
  ];
  console.log(years);
  return (
    <div className="expenses">
      <Filter years={years} />
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
