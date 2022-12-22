
import { ListProps } from '../types/ListProps';

import { Box, Button, Grid, List, ListItem, Typography } from '@mui/material';
import TransactionList from '../types/TransactionList';


const DepositsList = (props: ListProps) => {


    console.log(props.list)

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid container spacing={2}>
                <List>
                    {
                        props.list.map((transaction: TransactionList) => {
                            return (
                                <ListItem
                                    id={transaction.id}
                                    key={transaction.id}
                                >
                                    {transaction.date}
                                    {transaction.description}
                                    {transaction.amount}
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Grid>
        </Box>

    )
}

export default DepositsList;