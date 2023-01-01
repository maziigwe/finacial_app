import React, { useState } from "react";
import { Navbars } from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import { DashboardContent } from "../components/DashboardContent";
import { Container, Row, Col } from "react-bootstrap";
import "./dashboard.css";

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Container fluid className="p-0 dashboard">
        <Row className="m-0">
          {/* <Navbars /> */}

          <Col
            md={3}
            className={`sidebar d-none d-md-block ${isOpen ? "open" : ""}`}
          >
            <Sidebar />
          </Col>
          <Col className="p-0" md={9}>
            <DashboardContent />
          </Col>
        </Row>
      </Container>
    </>
  );
};
