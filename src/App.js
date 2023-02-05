import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import "./App.css";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    title: "Car Insurance",
    price: 700,
    date: new Date(2022, 2, 12),
    id: Math.random(),
  },
  {
    title: "Books",
    price: 53.12,
    date: new Date(2022, 11, 24),
    id: Math.random(),
  },
  { title: "Tv", price: 799, date: new Date(2022, 10, 10), id: Math.random() },
  {
    title: "Laptop",
    price: 1850,
    date: new Date(2023, 1, 18),
    id: Math.random(),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const changeExpenses = (expense) => {
    setExpenses((prevExpenses) => [
      {
        ...expense,
        id: Math.random(),
      },
      ...prevExpenses,
    ]);
  };
  return (
    <div className="App my-5 p-2 ">
      <NewExpense changeExpenses={changeExpenses} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
