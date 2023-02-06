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
  const { isAdmin } = JSON.parse(localStorage.getItem("user"));
  console.log(isAdmin);
  const color = "lightblue";
  const size = "30";
  const classes = "mx-2";
  return (
    <Nav defaultActiveKey="/home" className="flex-column ">
      <Nav.Link href="/">
        <div className=" icon-positioning">
          <Bank2 className={classes} size={size} color={color} />
          Home
        </div>
      </Nav.Link>
      <Nav.Link href="/">
        <div className=" icon-positioning">
          <ClockFill className={classes} size={size} color={color} />
          History
        </div>
      </Nav.Link>
      <Nav.Link href="/">
        <div className=" icon-positioning">
          <CashStack className={classes} size={size} color={color} />
          Balances
        </div>
      </Nav.Link>
      <Nav.Link href="/">
        <div className=" icon-positioning">
          <CreditCard className={classes} size={size} color={color} />
          Cards
        </div>
      </Nav.Link>
      <Nav.Link href="/">
        <div className=" icon-positioning">
          <People className={classes} size={size} color={color} /> Recipient
        </div>
      </Nav.Link>
      <Nav.Link href="/">
        <div className=" icon-positioning">
          <FileEarmarkBarGraph className={classes} size={size} color={color} />{" "}
          Reports
        </div>
      </Nav.Link>
      <Nav.Link href="/">
        <div className=" icon-positioning">
          <GearWideConnected className={classes} size={size} color={color} />
          Settings
        </div>
      </Nav.Link>
      <Nav.Link href="/">
        <div className=" icon-positioning">
          <QuestionCircle className={classes} size={size} color={color} /> Help
        </div>
      </Nav.Link>
      <Nav.Link href="/">
        <div className=" icon-positioning">
          <ShieldCheck className={classes} size={size} color={color} /> Privacy
        </div>
      </Nav.Link>
      {isAdmin && (
        <Nav.Link href="/create-account">
          <div className=" icon-positioning">
            <ShieldCheck className={classes} size={size} color="red" /> Open
            Account
          </div>
        </Nav.Link>
      )}
      {isAdmin && (
        <Nav.Link href="/customers">
          <div className=" icon-positioning">
            <ShieldCheck className={classes} size={size} color="red" />
            All Customers
          </div>
        </Nav.Link>
      )}
      {isAdmin && (
        <Nav.Link href="/admin-transactions">
          <div className=" icon-positioning">
            <ShieldCheck className={classes} size={size} color="red" />
            All Transactions
          </div>
        </Nav.Link>
      )}
    </Nav>
  );
}

export default Sidebar;
