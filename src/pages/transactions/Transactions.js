import moment from "moment";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { getTransactions } from "../../services/transactions";
import SelectDate from "./components/SelectDate";
import TransactionItem from "./components/TransactionItem";

function Transactions() {
  const now = moment().format("YYYY-MM");
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = (month) => {
    const from = `${month}-01`;
    const to = moment(month).endOf("month").format("YYYY-MM-DD");

    getTransactions({ from, to }).then((transactions) => {
      setTransactions(transactions);
    });
  };

  const handleSelectDate = (month) => {
    fetchTransactions(month);
  };

  useEffect(() => {
    fetchTransactions(now);
  }, [now]);

  return (
    <>
      <h2>Transactions</h2>
      <SelectDate initValue={now} maxValue={now} onSelect={handleSelectDate} />
      <Row xs={1} sm={2}>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))}
      </Row>
    </>
  );
}

export default Transactions;