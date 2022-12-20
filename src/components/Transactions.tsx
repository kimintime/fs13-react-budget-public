import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";


const Transactions = ({ setTransactions, transactions, }:
    { setTransactions: any, transactions: any }) => {

    const [data, setData] = useState(0)
    const [inputText, setInputText] = useState('')
    const [date, setDate] = useState('')
    const [type, setType] = useState('')


    const handleSubmit = (event: any) => {
        event.preventDefault()

        if (type === "deposit") {
            setTransactions({
                ...transactions,
                description: inputText,
                date: date,
                amount: data,
                deposit: transactions.deposit + data,
                id: Math.random().toString(36).slice(2, 7)
            })
        }

        if (type === "expense") {
            setTransactions({
                ...transactions,
                description: inputText,
                date: date,
                amount: data,
                expense: transactions.expense + data,
                id: Math.random().toString(36).slice(2, 7)
            })
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
            {/* <p>{transactions.id} {transactions.date} {transactions.description} {transactions.amount} {transactions.deposit} {transactions.expense}</p> */}

        </Box>
    )

}

export default Transactions;