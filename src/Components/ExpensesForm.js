import React, {useState} from "react";
import "./ExpensesForm.css";

const ExpensesForm = (props) =>{
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleChangeHandle = (event) =>{
        console.log(event.target.value);
        setTitle(event.target.value);
    }

    const amountChangeHandle = (event) =>{
        console.log(event.target.value);
        setAmount(event.target.value);
    }

    const dateChangeHandle = (event) =>{
        console.log(event.target.value);
        setDate(event.target.value);
    }

    const submitHandle = (event) =>{
        event.preventDefault();
        const expensesData = {
            id:(Math.random()*100).toFixed(2),
            title: title,
            amount: parseFloat(amount),
            date: new Date(date)
        }
        setTitle("");
        setAmount("");
        setDate("");
        props.onSubmitData(expensesData)
    }

    return(
        <form onSubmit={submitHandle}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandle}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} min="12-01-2020" max="31-12-2024" onChange={dateChangeHandle}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit" className="">Add Expenses</button>
            </div>
        </form>
    )
}

export default ExpensesForm;