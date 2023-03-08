import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense(props) {

 const receievedExpenseData = (expenseData) => {
  
  const expenseDataWithId=
  {
    ...expenseData,
    id:Math.floor(1 + Math.random() * 1000)
    
  }
  props.allExpenses(expenseDataWithId);

  // console.log(expenseDataWithId);
  }


  return (
    <div className='new-expense'>
      <ExpenseForm collectExpenseData={receievedExpenseData}/>
      </div>
  )
}
