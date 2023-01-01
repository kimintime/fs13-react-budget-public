import { useState } from 'react';
import { Button, Box, FormControl, TextField } from '@mui/material';

import BalanceProps from '../types/BalanceProps';

const Total = ({ setBalance, balance }: BalanceProps) => {
    const [transfer, setTransfer] = useState(0)

    const handleTransfer = (event: any) => {
        event.preventDefault()

        if (balance.total - transfer < 0) {
            alert("Insuffiecient Funds: Amount may not exceed balance.")

        } else {

            setBalance({
                ...balance,
                savings: balance.savings + transfer,
                total: balance.total - transfer
            })
        }

        setTransfer(0)
    }

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
            onSubmit={handleTransfer}
        >
            <h4>Current Balance: {balance.total}</h4>
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