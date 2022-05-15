import React, {useState} from "react";
import './App.css';
import ExpenseItem from './Expenses/Expenses';
import NewExpenses from './Components/NewExpenses';
import ExpensesFilter from './Components/ExpensesFilter';
import Card from "./CustomComponents/Card";
import ExpensesChart from "./Components/ExpenseChart";

const dummyData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [filteredYear, setFilteredYear] = useState('2021');
  const [data, setData] = useState(dummyData);

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const addExpenses = newData => {
    console.log("New Expenses js");
    console.log(newData);
    setData(pre =>{
      return [newData, ...pre]
    })
  }

  const filteredExpenses = data.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <NewExpenses addExpenses={addExpenses}/>
      <Card className="card-width">
      <ExpensesChart expenses={filteredExpenses}/>

        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {
          filteredExpenses.length>0?
          filteredExpenses.map((e, index) => {
            return(
              <ExpenseItem key={e.id+index} data={e}/>
            )
          })
          :
          <div style={{marginTop:50}}>
            <h3 className="no-data">No Expenses Found</h3>
          </div>
        }
      </Card>
    </>
  );
}

export default App;
