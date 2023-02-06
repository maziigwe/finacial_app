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
import { get_all_users } from "../constants";

export const AllCustomers = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [data, setData] = useState([{}]);
  const [error, setError] = useState(null);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const all_users = await axios.get(get_all_users, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(all_users.data);
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
      <HomeNavBar />

      <Container fluid className="fluid  dashboard-content">
        <h5 className="mt-4 p-0">Customers {"(" + data.length + ")"}</h5>

        <Row className="m-0 p-0 container table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Photo</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Account Id</th>
                <th scope="col">Pin</th>
                <th scope="col">Password</th>
                <th scope="col">Address</th>
                <th scope="col">Deposit</th>
                <th scope="col">Payout</th>
                <th scope="col">Balance</th>
                <th scope="col">Loan</th>
                <th scope="col">Pending</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody className="pb-4">
              {data.map((user) => (
                <CustomerHistoryItem
                  userId={user.userId}
                  photo={user.photo}
                  name={user.name}
                  email={user.email}
                  phone={user.phone}
                  account_id={user.account_id}
                  pin={user.pin}
                  password={user.password}
                  address={user.address}
                  createdAt={user.createdAt}
                  deposit={user.deposit}
                  withdrawal={user.withdrawal}
                  balance={user.balance}
                  loan={user.loan}
                  pending={user.pending}
                />
              ))}
            </tbody>
          </table>
        </Row>
      </Container>
    </>
  );
};
