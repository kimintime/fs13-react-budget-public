
import { Box, Button } from "@mui/material"
import ListProps from "../types/ListProps"

const Transactionlist = ({ list }: ListProps) => {
    const handleList = () => {

        list.map(item  => {
            return (
                <p key={item.id}>{item.description}</p>
            )
        })
    }

    console.log(list)

    return (
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
                onClick={() => handleList}
            >
                List
            </Button>
        </Box>
    )
}

export default Transactionlist