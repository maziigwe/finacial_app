import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { LoginPage } from "./pages/LoginPage";
//const LoginPage = lazy((this.props) => import("./pages/LoginPage"));
import { SignupPage } from "./pages/SigninPage";
import { LoanRequestPage } from "./pages/LoanRequestPage";
import { AdminCreateAccount } from "./pages/AdminCreateAccount";
import { MoneyTransfer } from "./pages/TransferFund";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AllCustomers } from "./pages/AllCustomers";
import { FundAccountPage } from "./pages/FundAccountPage";
import { AllTransactions } from "./pages/AllTransactions";

function App(props) {
  const user = localStorage.getItem("user");
  const isAdmin = user ? JSON.parse(user).isAdmin : false;
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/login" element={<LoginPage {...props} />} />
        <Route path="/sign-in" element={<SignupPage {...props} />} />
        <Route path="/loan" element={<LoanRequestPage {...props} />} />
        <Route path="/money-transfer" element={<MoneyTransfer {...props} />} />
        <Route
          path="/create-account"
          element={
            isAdmin === true ? (
              <AdminCreateAccount {...props} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/customers"
          element={
            isAdmin === true ? (
              <AllCustomers {...props} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/add-fund/:email"
          element={
            isAdmin === true ? (
              <FundAccountPage {...props} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/admin-transactions"
          element={
            isAdmin === true ? (
              <AllTransactions {...props} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route path="/dashboard" element={<Dashboard {...props} />} />
      </Routes>
    </>
  );
}

export default App;
