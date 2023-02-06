import React from "react";
import "./transactionhistory.css";
import { TransactionHistoryItem } from "./../component/TransactionHistoryItem";

export const TransactionHistory = ({
  transactions = [
    {
      _id: "63e00f4e591890b274706f4f",
      email: "grek@gmail.com",
      transactionType: "credit",
      isApproved: true,
      accountType: "main",
      amount: 100,
      createdAt: "2023-02-05T20:19:26.868Z",
      updatedAt: "2023-02-05T20:28:10.477Z",
    },
  ],
}) => {
  return (
    <>
      {transactions.map((t) => (
        <TransactionHistoryItem
          key={t._id}
          accountType={t.accountType}
          transactionType={t.transactionType}
          amount={t.amount}
          date={t.createdAt}
          status={
            t.isApproved == true
              ? "success"
              : t.isApproved == false
              ? "processing"
              : "failed"
          }
        />
      ))}
      {/* <TransactionHistoryItem key="processing" status="processing" />
      <TransactionHistoryItem key="failed" status="failed" />
      <TransactionHistoryItem key="success" status="success" />
      <TransactionHistoryItem key="processing" status="processing" />
      <TransactionHistoryItem key="failed" status="failed" /> */}
    </>
  );
};
