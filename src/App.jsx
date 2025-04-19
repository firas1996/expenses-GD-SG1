import { useState } from "react";
import AddExpense from "./components/AddExpense";
import ExpensesContainer from "./components/ExpensesContainer";

const expensesData = [
  {
    id: 1,
    title: "New TV",
    price: 799.99,
    date: new Date("2025-02-12"),
  },
  {
    id: 2,
    title: "Voyage",
    price: 2799.99,
    date: new Date("2023-10-19"),
  },
  {
    id: 3,
    title: "Education",
    price: 5000,
    date: new Date("2024-08-20"),
  },
  {
    id: 4,
    title: "Phone",
    price: 1500,
    date: new Date("2025-02-7"),
  },
];
function App() {
  const [data, setData] = useState(expensesData);
  const getData = (newData) => {
    setData([newData, ...data]);
  };
  return (
    <>
      <AddExpense getData={getData} />
      <ExpensesContainer expensesData={data} />
    </>
  );
}

export default App;
