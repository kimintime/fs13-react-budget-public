import TransactionList from "./TransactionList";

interface ListProp {
    transactions: TransactionList
    handleChange: (transactions: TransactionList) => void
}

export default ListProp;