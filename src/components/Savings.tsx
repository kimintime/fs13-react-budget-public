import { useState } from 'react';
import { Box, Button, FormControl, TextField, LinearProgress } from '@mui/material';

import BalanceProps from '../types/BalanceProps';

const Savings = ({ setBalance, balance }: BalanceProps) => {
    const [goal, setGoal] = useState(0)

    const handleReset = (event: any) => {
        event.preventDefault()

        setBalance({
            ...balance,
            total: balance.total + balance.savings,
            savings: 0
        }) 

        setGoal(0) 
    }

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
            <h4>Current Savings: {balance.savings}</h4>
            {goal > 0 && (
                <div>
                <h3>Current Goal: {goal}</h3>
                <span>Progress: {(100 / goal) * balance.savings}%</span>
                <LinearProgress
                    sx={{marginTop: "1em"}} 
                    variant="determinate" 
                    value={(100 / goal) * balance.savings} 
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