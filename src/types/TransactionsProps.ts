import React from "react";
import TransactionsItem from "./TransactionsItem";

interface TransactionsProps {
    transactions: TransactionsItem[],
    setTransactions: React.Dispatch<React.SetStateAction<TransactionsItem[]>>
}

export default TransactionsProps;
