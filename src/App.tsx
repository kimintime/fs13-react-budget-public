import React, { useState } from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import Transactions from './components/Transactions';
import TransactionList from './types/TransactionList';
import Total from './components/Total';
import Savings from './components/Savings';

import './App.css';


function App() {
  const [transactions, setTransactions] = useState<TransactionList>({
    description: '',
    date: '',
    deposit: 0,
    expense: 0,
    amount: 0,
    savings: 0,
    total: 0,
    id: ''
  })

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
      <Grid container style={{justifyContent: "center"}}>
        <Grid md={4} sm={8} xs={12}>
          <Total
            transactions={transactions}
            setTransactions={setTransactions}></Total>
        </Grid>
        <Grid md={4} sm={8} xs={12}>
          <Savings
            transactions={transactions}
            setTransactions={setTransactions}></Savings>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
