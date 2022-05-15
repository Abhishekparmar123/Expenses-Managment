import React, {useState} from "react";
import ExpensesForm from "./ExpensesForm";
import "./NewExpenses.css"
const NewExpenses = (props) =>{
    const [isEditing, setIsEditing] = useState(false);

    const newExpensesData = data =>{
        props.addExpenses(data);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
    const stopEditingHandler = () => {
    setIsEditing(false);
    };

    return(
        <div className='new-expense'>
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpensesForm
                onSubmitData={newExpensesData}
                onCancel={stopEditingHandler}
                />
            )}
        </div>
    )
}
export default NewExpenses;