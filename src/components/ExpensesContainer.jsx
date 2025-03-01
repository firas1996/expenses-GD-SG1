import "./ExpensesContainer.css";
import ExpenseItem from "./ExpenseItem";
import Chart from "./Chart";
import Filter from "./Filter";
import { useState } from "react";

const ExpensesContainer = ({ expensesData }) => {
  const years = [
    "All",
    ...new Set(expensesData.map((el) => el.date.getFullYear()).sort()),
  ];
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const filtredData = expensesData.filter((el) => {
    return selectedYear == "All" ? true : el.date.getFullYear() == selectedYear;
  });
  return (
    <div className="expenses">
      <Filter
        years={years}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <Chart expensesData={filtredData} />
      {filtredData.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
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
