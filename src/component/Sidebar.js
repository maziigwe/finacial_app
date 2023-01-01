import React from "react";
import { Nav } from "react-bootstrap";
import {
  Bank2,
  ClockFill,
  CashStack,
  CreditCard,
  People,
  FileEarmarkBarGraph,
  GearWideConnected,
  QuestionCircle,
  ShieldCheck,
} from "react-bootstrap-icons";

function Sidebar() {
  const color = "lightblue";
  const size = "30";
  const classes = "me-2";
  return (
    <Nav defaultActiveKey="/home" className="flex-column ">
      <Nav.Link href="/home">
        <Bank2 className={classes} size={size} color={color} />
        Home
      </Nav.Link>
      <Nav.Link href="/history">
        <ClockFill className={classes} size={size} color={color} />
        History
      </Nav.Link>
      <Nav.Link href="/balances">
        <CashStack className={classes} size={size} color={color} />
        Balances
      </Nav.Link>
      <Nav.Link href="/card">
        <CreditCard className={classes} size={size} color={color} />
        Cards
      </Nav.Link>
      <Nav.Link href="/recipient">
        <People className={classes} size={size} color={color} /> Recipient
      </Nav.Link>
      <Nav.Link href="/reports">
        <FileEarmarkBarGraph className={classes} size={size} color={color} />{" "}
        Reports
      </Nav.Link>
      <Nav.Link href="/settings">
        <GearWideConnected className={classes} size={size} color={color} />
        Settings
      </Nav.Link>
      <Nav.Link href="/help">
        <QuestionCircle className={classes} size={size} color={color} /> Help
      </Nav.Link>
      <Nav.Link href="/help">
        <ShieldCheck className={classes} size={size} color={color} /> Privacy
      </Nav.Link>
    </Nav>
  );
}

export default Sidebar;
