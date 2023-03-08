import React,{useState} from 'react'
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

let d_expenses = [
  {
    id: 'e1',
    title: 'School Fee',
    amount: 250,
    date: new Date(2021, 5, 12)
  },
  {


    id: 'e2',
    title: 'Books',
    amount: 230,
    date: new Date(2021, 2, 22)
  },
  {


    id: 'e3',
    title: 'House Rent',
    amount: 700,
    date: new Date(2021, 4, 2)
  },
  {

    id: 'e4',
    title: 'food',
    amount: 540,
    date: new Date(2021, 5, 5)
  },
  {

    id: 'e5',
    title: 'laptop',
    amount: 24000,
    date: new Date(2021, 9, 5)
  }

];

export default function App() {
  

  const [expenses, setExpenses] = useState(d_expenses)

  const newExpenseHandler=(newExpenseItem)=>
  {
    console.log(expenses)
    const updatedExpense = [newExpenseItem,...expenses];
    setExpenses(updatedExpense);
    console.log(updatedExpense);
    // console.log(newExpenseItem)
  }

  return (
    <>
      <NewExpense allExpenses={newExpenseHandler}/>
      <Expenses item={expenses}/>
    </>
  )
}
