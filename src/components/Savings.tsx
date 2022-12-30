import React, { useState } from 'react';
import TransactionsProps from '../types/TransactionsProps';

import { Box, Button, FormControl, TextField, LinearProgress } from '@mui/material';

const Savings = ({transactions, setTransactions}: TransactionsProps) => {
    const [goal, setGoal] = useState(0)

    const handleReset = (event: any) => {
        event.preventDefault()

        setTransactions({
            ...transactions,
            deposit: transactions.deposit + transactions.savings,
            savings: 0
        }) 
        
        setGoal(0) 
    }

    //console.log(transactions.savings)
    //console.log(goal)

    return(
        <Box
            sx={{
                width: 300,
                height: "auto",
                backgroundColor: '#cfd8dc',
                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
                margin: "0 auto",
                marginTop: "2em",
                padding: "1em"
            }}
            component="form"
            onSubmit={handleReset}
        >
            <h4>Current Savings: {transactions.savings}</h4>
            {goal > 0 && (
                <div>
                <h3>Current Goal: {goal}</h3>
                <span>Progress: {(100 / goal) * transactions.savings}%</span>
                <LinearProgress
                    sx={{marginTop: "1em"}} 
                    variant="determinate" 
                    value={(100 / goal) * transactions.savings} 
                />
                </div>
            )}
            <FormControl sx={{ m: 1, minWidth: 80, }}>
                <TextField
                    id="goal"
                    label="Set goal:"
                    type="text"
                    value={goal || ''}
                    variant="standard"
                    InputLabelProps={{shrink: true}}
                    onChange=
                        {(event) => setGoal(parseInt(event.target.value))}
                />
                <Box style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "1em"
                    }}
                >
                    <Button
                        variant="contained"
                        type="submit"
                        size="large"
                        color="warning"
                    >
                        Reset
                    </Button>
                </Box>
            </FormControl>
        </Box>
    )
}

export default Savings;