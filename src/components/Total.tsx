import { useState } from 'react';
import TransactionsProps from '../types/TransactionsProps';

import { Button, Box, FormControl, TextField } from '@mui/material';

const Total = ({ transactions, setTransactions }: TransactionsProps) => {

    const [transfer, setTransfer] = useState(0)

    const handleBalance = (event: any) => {
        event.preventDefault()

        if (transactions.deposit - transactions.expense - transfer < 0) {
            alert("Account limit exceeded")

        } else {

            setTransactions({
                ...transactions,
                savings: transactions.savings + transfer,
                deposit: transactions.deposit - transfer
            })
        }
        
        setTransfer(0)
    };

    const handleSavings = (event: any) => {
        if (isNaN(event.target.value)) {
            alert("Please enter a valid number")
        }
        
        setTransfer(parseInt(event.target.value))
    }


    return (
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
            onSubmit={handleBalance}
        >
            <h4>Current Balance: {" "}
                {transactions.deposit - transactions.expense - transfer}
            </h4>
            <FormControl sx={{ m: 1, minWidth: 80, }}
            >
                <TextField
                    id="transfer"
                    label="Transfer to savings:"
                    type="text"
                    value={transfer || ' '}
                    variant="standard"
                    onChange=
                        {handleSavings}
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
                    >
                        Transfer
                    </Button>
                </Box>
            </FormControl>
        </Box>
    )


}

export default Total;