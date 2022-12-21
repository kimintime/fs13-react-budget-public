import React from "react";
import TransactionList from "./TransactionList";

interface TransactionsProps {
    transactions: TransactionList,
    setTransactions: React.Dispatch<React.SetStateAction<TransactionList>>
}

export default TransactionsProps;
