import React from "react";
import { CashCoin } from "react-bootstrap-icons";
import "./transactionhistoryitem.css";

export const TransactionHistoryItem = ({ status = "processing" }) => {
  const color = "gray";
  const size = "20";
  const classes = "me-2";

  return (
    <tr className="history-item-container">
      <td scope="row">
        <CashCoin className={classes} size={size} color={color} />
        <span className="transaction_item">Payment to Molly Sanders</span>
      </td>
      <td scope="row">
        <span className="amount_item"> $20,000</span>{" "}
        <span className="amount_item_USD">USD</span>
      </td>
      <td scope="row">
        <span className={"badge status_item p-2 px-3 " + status}>{status}</span>
      </td>
      <td scope="row">
        <span className="date_item">July 11, 2020</span>
      </td>
    </tr>
  );
};
