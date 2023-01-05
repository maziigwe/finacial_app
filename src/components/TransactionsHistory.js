import React from "react";
import { TransactionHistoryItem } from "../component/TransactionHistoryItem";
import "./transactionhistory.css";

export const TransactionHistory = () => {
  return (
    <>
      <TransactionHistoryItem key="success" status="success" />
      <TransactionHistoryItem key="processing" status="processing" />
      <TransactionHistoryItem key="failed" status="failed" />
      <TransactionHistoryItem key="success" status="success" />
      <TransactionHistoryItem key="processing" status="processing" />
      <TransactionHistoryItem key="failed" status="failed" />
    </>
  );
};
