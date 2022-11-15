import React, { useState } from "react"
import ExpensesList from "./ExpensesList"
import ExpensesFilter from "./ExpensesFilter"
import Card from "../UI/Card"
import "./NewExpenseItem.css"
import ExpensesChart from "./ExpensesChart"


export default function NewExpenseItem(props) {
  const [filteredYear, setFilteredYear] = useState("2021")

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filterExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })
 
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses = {filterExpenses}/>
        <ExpensesList items = {filterExpenses} />
      </Card>
    </div>
  )
}