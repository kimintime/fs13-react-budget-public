import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Transactions from './components/Transactions';
import TransactionList from './types/TransactionList';

import './App.css';


function App() {
  const [transactions, setTransactions] = useState<TransactionList>({
    description: '',
    date: '',
    deposit: 0,
    expense: 0,
    savings: 0,
    total: 0,
    id: ''
  })

  const handleChange = (transactions: TransactionList): void => 
    { setTransactions(transactions) }
  
  return (
    <div className="App">
      <AppBar position="static" style={{ marginBottom: 15 }}>
        <Toolbar>
          <Typography variant="h4" noWrap>Budget App</Typography>
        </Toolbar>
      </AppBar>

      <Transactions
        setTransactions={setTransactions}
        transactions={transactions}
      ></Transactions>
    </div>
  );
}

export default App;
