import React, { useState, useEffect } from "react";
import { Navbars } from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import { DashboardContent } from "../components/DashboardContent";
import { Container, Row, Col } from "react-bootstrap";
import "./dashboard.css";
import "./all-customers.css";
import axios from "axios";
import { toast } from "react-toastify";
import { TransactionHistory } from "../components/TransactionsHistory";
import { HomeNavBar } from "../components/HomeNavBar";
import { CustomerHistoryItem } from "../component/CustomerHistoryItem";
import { TransactionHistoryItemAdmin } from "../component/TransactionHistoryItemAdmin";
import { admin_all_transactions } from "../constants";

export const AllTransactions = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [myTransactions, setMyTransactions] = useState([{}]);
  const [error, setError] = useState(null);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const my_transactions = await axios.get(admin_all_transactions, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

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
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HomeNavBar />

      <Container fluid className="fluid  dashboard-content">
        <h5 className="mt-4 p-0">All Transactions</h5>

        <Row className="m-0 p-0 container table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Transaction</th>
                <th scope="col">Amount</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="pb-4">
              {myTransactions.reverse().map((t) => (
                <TransactionHistoryItemAdmin
                  accountType={t.accountType}
                  amount={t.amount}
                  date={t.createdAt}
                  email={t.email}
                  id={t._id}
                  status={
                    t.isApproved == true
                      ? "success"
                      : t.isApproved == false
                      ? "processing"
                      : "failed"
                  }
                  transactionType={t.transactionType}
                />
              ))}
            </tbody>
          </table>
        </Row>
      </Container>
    </>
  );
};
