import React from "react";
import { CashCoin } from "react-bootstrap-icons";
import "./transactionhistoryitem.css";
import { approve_transaction, delete_transaction } from "./../constants";
import axios from "axios";
import { toast } from "react-toastify";

export const TransactionHistoryItemAdmin = ({
  status = "processing",
  amount = "20,000",
  email = "johm@gmail.com",
  date = "2023-02-05T20:19:26.868Z",
  accountType = "main",
  transactionType = "credit",
  id,
}) => {
  const color = "gray";
  const size = "20";
  const classes = "mx-2";
  const token = JSON.parse(localStorage.getItem("token"));
  //convert Date
  const converted_date = new Date(date);
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
  const handleApprove = async (id) => {
    try {
      const login_request = await axios.patch(
        approve_transaction + id,
        {},
        {
          "Content-Type": "application/json",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = login_request;
      if (data) {
        toast("Approved!", {
          type: "success",
          autoClose: 5000,
        });
        window.location = "/admin-transactions";
      }
    } catch (error) {
      toast(error.response.data.message, {
        type: "error",
        autoClose: 5000,
      });
    }
  };
  const handleDelete = async (id) => {
    try {
      const login_request = await axios.delete(delete_transaction + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = login_request;
      if (data) {
        toast("Deleted!", {
          type: "success",
          autoClose: 5000,
        });
        window.location = "/admin-transactions";
      }
    } catch (error) {
      toast(error.response.data.message, {
        type: "error",
        autoClose: 5000,
      });
    }
  };
  return (
    <tr className="history-item-container" key={id}>
      <td scope="row">
        <span className="transaction_item">
          <CashCoin className={classes} size={size} color={color} />
          {transactionType === "credit" ? "Payment" : "Payout"} {"via "}
          {accountType === "main"
            ? "Main account"
            : accountType === "loan"
            ? "Loan"
            : ""}
        </span>
      </td>
      <td scope="row">
        <span className="amount_item"> {"$" + amount}</span>
        <span className="amount_item_USD mx-1">USD</span>
      </td>
      <td scope="row">
        <span className="amount_item"> {email}</span>
      </td>
      <td scope="row">
        <span className={"badge status_item p-2 px-3 " + status}>{status}</span>
      </td>
      <td scope="row">
        <span className="date_item">{dateFormatted}</span>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => handleApprove(id)}>
          Approve
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
