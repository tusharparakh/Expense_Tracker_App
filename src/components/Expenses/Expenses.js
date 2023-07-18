import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import React from "react";
import Card from "../../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}
export default Expenses;
