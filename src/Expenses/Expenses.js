import Card from "../CustomComponents/Card";
import ExpenseDate from "../Components/ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props){
    // console.log(props)
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.data.date}/>
            <div className="expense-item__description">
                <h2>{props.data.title}</h2>
                <div className="expense-item__price">{"$ "+props.data.amount.toFixed(2)}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;