import React from "react"
import Balance from "./Balance";

interface BalanceProps {
    balance: Balance
    setBalance: React.Dispatch<React.SetStateAction<Balance>>
}

export default BalanceProps