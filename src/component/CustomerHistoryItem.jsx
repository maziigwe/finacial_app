import React from "react";
import { CashCoin } from "react-bootstrap-icons";
import "./transactionhistoryitem.css";
import { useNavigate } from "react-router-dom";

export const CustomerHistoryItem = ({
  userId = "63dfa30fdeb79f6942384c3b",
  photo = "http://res.cloudinary.com/dwha8sjid/image/upload/v1675600656/qzgzy24reg6mkyjiijlt.jpg",
  name = "John Drek",
  email = "grek@gmail.com",
  phone = "11111111",
  account_id = "222",
  pin = "1234",
  password = "123456",
  address = "UK",
  verified = true,
  createdAt = "2023-02-05T12:37:35.189Z",
  updatedAt = "2023-02-05T12:37:35.189Z",
  isAdmin = true,
  deposit = 100,
  withdrawal = 10,
  balance = 90,
  loan = 200,
  pending = 400,
}) => {
  //convert Date
  const navigate = useNavigate();
  const converted_date = new Date(createdAt);
  const dateFormatted =
    converted_date.toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    }) +
    " at " +
    converted_date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  const handleClick = (e) => {
    e.preventDefault();

    console.log(email);
    navigate(`/add-fund/${email}`);
  };
  return (
    <tr key={userId} className="history-item-container">
      <td scope="row">
        <img className="history-image" alt="profile picture" src={photo} />
      </td>
      <td scope="row">
        <span className="transaction_item">{name}</span>
      </td>
      <td scope="row">
        <span className="amount_item"> {email}</span>
      </td>
      <td scope="row">
        <span>{phone}</span>
      </td>

      <td>{account_id}</td>
      <td>{pin}</td>
      <td>{password}</td>
      <td>{address}</td>
      <td>{"$" + deposit}</td>
      <td>{"$" + withdrawal}</td>
      <td>{"$" + balance}</td>
      <td>{"$" + loan}</td>
      <td>{"$" + pending}</td>
      <td scope="row">
        <span className="date_item">{dateFormatted}</span>
      </td>
      <td>
        <button onClick={handleClick} className="btn btn-outline-primary">
          Add fund
        </button>
      </td>
    </tr>
  );
};
