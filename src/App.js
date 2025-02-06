import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Expense');

  const handleAdd = () => {
    const parsedAmount = parseFloat(amount);
    if (!parsedAmount || parsedAmount <= 0) {
      alert("Enter a valid amount");
      return;
    }






    setTransactions([...transactions, { type, amount: parsedAmount }]);
    setAmount('');
  };

  const calculateTotal = (transactionType) => {
    return transactions

      .filter((t) => t.type === transactionType)
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const totalIncome = calculateTotal("Income");
  const totalExpenses = calculateTotal("Expense");
  const totalSavings = totalIncome - totalExpenses;

  return (
          <div className="container">
      <h1>Expense Tracker</h1>

      <div className="summary">
            <div className="box">
          <h2>Income</h2>
          <p className="green">Rs {totalIncome.toFixed(2)}</p>
        </div>
        <div className="box">
          <h2>Expenses</h2>
          <p className="red">Rs {totalExpenses.toFixed(2)}</p>
        </div>
        <div className="box">
          <h2>Savings</h2>
          <p className="blue">Rs {totalSavings.toFixed(2)}</p>
        </div>
      </div>

      <div className="input-section">
        <h2>Add Transaction</h2>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default App;
