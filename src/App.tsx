import { useState } from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';

import TransactionsItem from './types/TransactionsItem';
import Balance from './types/Balance';

import Transactions from './components/Transactions';
import Total from './components/Total';
import Savings from './components/Savings';
import Transactionlist from './components/Transactionlist';

import './App.css';

function App() {
  const [transactions, setTransactions] = useState<TransactionsItem[]>([])
  const [balance, setBalance] = useState<Balance>({
    deposit: 0,
    expense: 0,
    savings: 0,
    total: 0
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
        setBalance={setBalance}
        balance={balance}
      ></Transactions>
      <Grid container style={{ justifyContent: "center" }}>
        <Grid item lg={3} md={4} sm={8} xs={12}>
          <Total
            setBalance={setBalance}
            balance={balance}
          ></Total>
        </Grid>
        <Grid item lg={3} md={4} sm={8} xs={12}>
          <Savings
            setBalance={setBalance}
            balance={balance}></Savings>
        </Grid>
      </Grid>
      <Grid container style={{ justifyContent: "center" }}>
        <Grid item md={8}>
          <Transactionlist list={transactions} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
