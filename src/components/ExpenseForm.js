import React,{useState} from 'react'
import './ExpenseForm.css'

export default function ExpenseForm(props) {
  
    const [enteredtitle, setTitle] = useState('');

    const [enteredamount, setAmount] = useState('');

    const [enterededate, setDate] = useState('')

    const titleChangeHandler=(event)=>
    {
        setTitle(event.target.value);
    }

    const amountChangeHandler=(event)=>
    {
        setAmount(event.target.value);

    }

    const dateChangeHandler=(event)=>
    {
        setDate(event.target.value);

    }

    // const focusHandler=()=>
    // {
    //     setTitle("");
    //     setAmount("");

    // }


    const submitHandler=(event)=>
    {
        event.preventDefault();
        const expenseData=
        {
            title:enteredtitle,
            amount:enteredamount,
            date:new Date(enterededate)
        }

        props.collectExpenseData(expenseData);


        setTitle('');
        setAmount('');
        setDate('');

        // console.log(expenseData);
    }

    
  
    return (
            <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredtitle} required onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"   min="0.01" step="0.01" required value={enteredamount}  onChange={amountChangeHandler}  />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enterededate} required onChange={dateChangeHandler}  />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
  )
}
