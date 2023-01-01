import { useState } from "react";
import { Button, FormControl, InputLabel, MenuItem, Select, Box, TextField } from "@mui/material";

import TransactionsProps from "../types/TransactionsProps";
import BalanceProps from "../types/BalanceProps";

type Props = TransactionsProps & BalanceProps

const Transactions = ({ setTransactions, transactions, balance, setBalance }: Props) => {

    const [data, setData] = useState(0)
    const [inputText, setInputText] = useState('')
    const [date, setDate] = useState('')
    const [type, setType] = useState('')

    const handleSubmit = (event: any) => {
        event.preventDefault()

        if (type === "deposit") {
            setTransactions([
                ...transactions,
                {
                    description: inputText,
                    date: date,
                    amount: data,
                    id: Math.random().toString(36).slice(2, 7)
                }
            ])

            setBalance({
                ...balance,
                deposit: balance.deposit + data,
                total: balance.total + data
            })
        }

        if (type === "expense") {

            if (balance.total - data < 0) {
                alert("Withdrawal must not exceed current balance.")

            } else {
                setTransactions([
                    ...transactions,
                    {
                        description: inputText,
                        date: date,
                        amount: -data,
                        id: Math.random().toString(36).slice(2, 7)
                    }
                ])

                setBalance({
                    ...balance,
                    expense: balance.expense + data,
                    total: balance.total - data
                })
            }
        }
        setDate('')
        setInputText('')
        setType('')
        setData(0)
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField
                id="date"
                label="Date"
                type="date"
                value={date}
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(event) => setDate(event.target.value)}
            />
            <TextField
                id="description"
                label="Description"
                type="text"
                value={inputText}
                variant="standard"
                onChange={(event) => setInputText(event.target.value)}
            />
            <TextField
                id={type}
                label="Amount"
                type="text"
                value={data || 0}
                variant="standard"
                onChange={(event) => setData(parseInt(event.target.value))}
            />
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel>Type</InputLabel>
                <Select
                    value={type}
                    label="Type"
                    onChange={(event) => setType(event.target.value)}
                >
                    <MenuItem value="deposit">Deposit</MenuItem>
                    <MenuItem value="expense">Expense</MenuItem>
                </Select>
            </FormControl>
            <Box style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
            >
                <Button
                    variant="contained"
                    type="submit"
                    size="large"
                >
                    Add {type}
                </Button>
            </Box>
        </Box>
    )

}

export default Transactions;