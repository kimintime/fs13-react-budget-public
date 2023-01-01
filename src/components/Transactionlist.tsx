import { useState } from "react"
import { Box, Button } from "@mui/material"

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

            {
                show ?
                list.map(item  => {
                    return (
                        <p key={item.id}>{item.date} - {item.description} - {item.amount}</p>
                    )
                })
                : null
            }
        </Box>
    )
}

export default Transactionlist