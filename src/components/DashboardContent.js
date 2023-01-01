import React from "react";
import { Container, Row } from "react-bootstrap";
import { CardItem } from "./../component/CardItem";
import { DashboardNavbar } from "./DashboardNavbar";

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
      </Container>
    </>
  );
};
