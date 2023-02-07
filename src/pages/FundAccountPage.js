import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Layout } from "../component/Layout";
import { Input } from "../components/common/Input";
import logo from "./../assets/signing-logo.png";
import axios from "axios";
import { toast } from "react-toastify";
import "./loginpage.css";
import { HomeNavBar } from "../components/HomeNavBar";
import { login_url } from "../constants";
import { InputSelect } from "../components/common/InputSelect";
import { admin_fund_user } from "./../constants";

export const FundAccountPage = () => {
  const props = {
    title: "Diamond Continental Inc. - Add Fund",
    description: "Fund account.",
  };
  const { email } = useParams();
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  const [loginData, setLoginData] = useState({
    email: email,
    amount: 0,
    transactionType: "credit",
    accountType: "main",
  });
  const handleOnchange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    let data;
    switch (e.target.id) {
      case "amount":
        data = { ...loginData };
        data.amount = value;
        setLoginData(data);
        break;
      case "transactionType":
        data = { ...loginData };
        data.transactionType = value;
        setLoginData(data);
        break;
      case "accountType":
        data = { ...loginData };
        data.accountType = value;
        setLoginData(data);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
    // try {
    //   const login_request = await axios.post(admin_fund_user, loginData, {
    //     "Content-Type": "application/json",
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    //   const { data } = login_request;
    //   if (data) {
    //     toast("Fund added!", {
    //       type: "success",
    //       autoClose: 5000,
    //     });
    //     setLoginData({
    //       email: email,
    //       amount: 0,
    //       transactionType: "credit",
    //       accountType: "main",
    //     });
    //     navigate("/admin-transactions");
    //   }
    // } catch (error) {
    //   toast(error.response.data.message, {
    //     type: "error",
    //     autoClose: 5000,
    //   });
    //   setLoginData({
    //     email: email,
    //     amount: 0,
    //     transactionType: "credit",
    //     accountType: "main",
    //   });
    // }
  };
  return (
    <Layout {...props}>
      {/* <HomeNavBar /> */}
      <div className="login-page">
        <div className="login-card">
          <div>
            <h1>Add Fund</h1>
          </div>
          <p>
            You're are about to fund{" "}
            <span className="funding-user">{email}</span>
          </p>
          <div className="signing-logo">
            <img src={logo} alt="App Icon" />
          </div>
          <div>
            <Input
              name="amount"
              label="Amount"
              value={loginData.amount}
              type="text"
              placeholder="Amount"
              onChange={handleOnchange}
            />
            <InputSelect
              title="Account Type"
              onChange={handleOnchange}
              name="accountType"
              options={[
                { label: "Main account", value: "main" },
                { label: "Loan account", value: "loan" },
              ]}
            />
            <InputSelect
              title="Transaction Type"
              onChange={handleOnchange}
              name="transactionType"
              options={[
                { label: "Credit", value: "credit" },
                { label: "Debit", value: "debit" },
              ]}
            />
            <Link
              to=""
              onClick={handleSubmit}
              className="btn btn-primary login-btn"
            >
              Add Fund
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
