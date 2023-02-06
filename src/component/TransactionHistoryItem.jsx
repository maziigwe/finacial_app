import React from "react";
import { CashCoin } from "react-bootstrap-icons";
import "./transactionhistoryitem.css";

export const TransactionHistoryItem = ({
  status = "processing",
  amount = "20,000",
  date = "2023-02-05T20:19:26.868Z",
  accountType = "main",
  transactionType = "credit",
}) => {
  const color = "gray";
  const size = "20";
  const classes = "mx-2";

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

  return (
    <tr className="history-item-container">
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
        <span className={"badge status_item p-2 px-3 " + status}>{status}</span>
      </td>
      <td scope="row">
        <span className="date_item">{dateFormatted}</span>
      </td>
    </tr>
  );
};
