import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { CardItem } from "./../component/CardItem";
import { DashboardNavbar } from "./DashboardNavbar";
import { TransactionHistory } from "./TransactionsHistory";
import { get_account_info, get_my_transactions } from "../constants";
import axios from "axios";
import { toast } from "react-toastify";

export const DashboardContent = () => {
  const [data, setData] = useState({
    deposit: 0,
    withdrawal: 0,
    balance: 0,
    loan: 0,
    pending: 0,
  });
  const [myTransactions, setMyTransactions] = useState([{}]);
  const [error, setError] = useState(null);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const account_info = await axios.get(get_account_info, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const my_transactions = await axios.get(get_my_transactions, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(account_info.data);
        setMyTransactions(my_transactions.data);
      } catch (err) {
        setError(err);
        toast(error.response.data.message, {
          type: "error",
          autoClose: 5000,
        });
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <DashboardNavbar />
      <Container fluid className="fluid  dashboard-content">
        <h5 className="mt-4 p-0">Overview</h5>
        <Row className="m-0 p-0 container">
          <CardItem title="Account balance" amount={data.balance} />
          <CardItem title="Pending" amount={data.pending} />
          <CardItem title="Loan" amount={data.loan} />
          <CardItem title="Payouts (last 30 days)" amount={data.withdrawal} />
        </Row>
        <h5 className="mt-4 p-0">Recent activity</h5>
        <Row className="m-0 p-0 container table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Transaction</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody className="pb-4">
              <TransactionHistory transactions={myTransactions} />
            </tbody>
          </table>
        </Row>
      </Container>
    </>
  );
};
