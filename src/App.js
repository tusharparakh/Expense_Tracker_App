import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

let DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "College Fee",
    amount: 25000,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e2",
    title: "Petrol",
    amount: 500,
    date: new Date(2022, 5, 22),
  },
  {
    id: "e3",
    title: "Trip",
    amount: 7000,
    date: new Date(2022, 6, 4),
  },
  {
    id: "e4",
    title: "Mobile Recharge",
    amount: 533,
    date: new Date(2022, 7, 20),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
