import React from "react";
import { Container, Row } from "react-bootstrap";
import { CardItem } from "./../component/CardItem";
import { DashboardNavbar } from "./DashboardNavbar";
import { TransactionHistory } from "./TransactionsHistory";

export const DashboardContent = () => {
  return (
    <>
      <DashboardNavbar />
      <Container fluid className="fluid  dashboard-content">
        <h5 className="mt-4 p-0">Overview</h5>
        <Row className="m-0 p-0 container">
          <CardItem title="Account balance" amount={30000} />
          <CardItem title="Pending" amount={10000} />
          <CardItem title="Payouts (last 30 days)" amount={20000} />
        </Row>
        <h5 className="mt-4 p-0">Recent activity</h5>
        <Row className="m-0 p-0 container">
          {/* <div className="d-flex justify-content-between ">
            <div className="d-flex   flex-grow-1">Transaction</div>
            <div className="d-flex justify-content-between flex-grow-2">
              <div>Amount </div>
              <div>Status </div>
              <div>Date</div>
            </div>
          </div> */}
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Transaction</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              <TransactionHistory />
            </tbody>
          </table>
        </Row>
      </Container>
    </>
  );
};
