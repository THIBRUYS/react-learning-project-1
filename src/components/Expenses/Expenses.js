import {useState} from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'

const Expenses = (props) => {
    const [enteredFilter, setNewFilter] = useState('2020')

    const newFilterHandler = (filter) => {
        setNewFilter(filter);
        console.log(filter)
    }
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === enteredFilter;
    });

    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter value={enteredFilter} onNewFilter={newFilterHandler}/>
            {/* {filteredExpenses.length === 0 && <p> No expenses found.</p>}
            {filteredExpenses.length > 0 && filteredExpenses.map((expense) => {return (
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )})} */}
            {/* {filteredExpenses.length === 0 ? (
                <p> No expenses found.</p>
            ) : (
                filteredExpenses.map((expense) => {return (
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )})
            )} */}
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses