import { useState } from "react"
import {
    Box,
    Button,
    Table,
    TableBody,
    TableHead,
    TableContainer,
    TableRow,
    Paper,
    TableCell
} from "@mui/material"

import ListProps from "../types/ListProps"

const Transactionlist = ({ list }: ListProps) => {
    const [show, setShow] = useState(false)

    console.log(list)

    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "15px"
        }}
        >
            <Button
                variant="contained"
                type="submit"
                size="large"
                onClick={() => setShow(!show)}
            >
                List
            </Button>
            { show ?

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                list.map(item => {
                                    return (
                                        <TableRow key={item.id}>
                                            <TableCell>{item.date}</TableCell>
                                            <TableCell>{item.description}</TableCell>
                                            <TableCell>{item.amount}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>

                : null
            }
        </Box>
    )
}

export default Transactionlist