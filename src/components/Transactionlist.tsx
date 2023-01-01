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
    TableCell,
    tableCellClasses,
    styled
} from "@mui/material"

import ListProps from "../types/ListProps"

const Transactionlist = ({ list }: ListProps) => {
    const [show, setShow] = useState(false)

    const StyledTableCell: any = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

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
            {show ?

                <TableContainer component={Paper} style={{ marginBottom: "15px" }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" style={{fontWeight: "bold"}}>Date</TableCell>
                                <TableCell align="center" style={{fontWeight: "bold"}}>Description</TableCell>
                                <TableCell align="right" style={{fontWeight: "bold"}}>Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                list.map(item => {
                                    return (
                                        <StyledTableRow key={item.id}>
                                            <StyledTableCell align="left" >{item.date}</StyledTableCell>
                                            <StyledTableCell align="center">{item.description}</StyledTableCell>
                                            <StyledTableCell
                                                align="right"
                                                style={{color: item.amount < 0 ? 'red' : ''}}
                                            >
                                                {item.amount}
                                            </StyledTableCell>
                                        </StyledTableRow>
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