import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../component/Layout";
import { Input } from "../components/common/Input";
import logo from "./../assets/signing-logo.png";
import { InputTextArea } from "../components/common/InputTextArea";
import "./admin-create-account.css";
import "./fund-transfer.css";
import { InputSelect } from "../components/common/InputSelect";

export const MoneyTransfer = () => {
  const props = {
    title: "Diamond Continental Inc. - Money Transfer",
    description: "transfer fund easily",
  };
  const [loginData, setLoginData] = useState({
    account_id: "",
    full_name: "",
    password: "",
    email: "",
    account_no: "",
    routing_no: "",
    account_type: "",
    phone: "",
  });
  const handleOnchange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    let data;
    switch (e.target.id) {
      case "account_id":
        data = { ...loginData };
        data.account_id = value;
        setLoginData(data);
        break;
      case "Password":
        data = { ...loginData };
        data.password = value;
        setLoginData(data);
        break;
      default:
        break;
    }
  };
  const handleSubmit = () => {
    console.log(loginData);
  };
  return (
    <Layout {...props}>
      <div className="signin-page">
        <div className="login-card">
          <div>
            <h1>Money Transfer</h1>
          </div>
          <p>Fill out this money transfer form.</p>
          <div className="signing-logo">
            <img src={logo} alt="App Icon" />
          </div>
          <h3 className="form-subtitle">Receiver's Information</h3>
          <div>
            <Input
              name="bank_name"
              type="text"
              label="Bank Name"
              placeholder="Enter receiver's bank name"
              onChange={handleOnchange}
            />
            <Input
              name="account_no"
              type="text"
              label="Account Number"
              placeholder="1234567890000"
              onChange={handleOnchange}
            />
            <Input
              name="routing_no"
              type="text"
              label="Routing Number"
              placeholder="123456789"
              onChange={handleOnchange}
            />
            <Input
              name="receiver_email"
              type="email"
              label="Email Address"
              placeholder="Enter your email address"
              onChange={handleOnchange}
            />

            <InputSelect
              name="account_type"
              title="Account type"
              onChange={handleOnchange}
              options={[
                { label: "Savings", value: "savings" },
                { label: "Checking", value: "checkings" },
              ]}
            />

            <h3 className="form-subtitle">Sender's Information</h3>
            <Input
              name="account_id"
              type="text"
              label="Account ID"
              placeholder="Enter your account ID"
              onChange={handleOnchange}
            />
            <Input
              name="password"
              type="text"
              label="Password"
              placeholder="Enter password"
              onChange={handleOnchange}
            />

            <InputSelect
              name="account_type"
              title="Account type"
              onChange={handleOnchange}
              options={[
                { label: "Savings", value: "savings" },
                { label: "Checking", value: "checkings" },
              ]}
            />
            <Input
              name="sender_email"
              type="email"
              label="Email Address"
              placeholder="Enter your email address"
              onChange={handleOnchange}
            />

            <Link
              onClick={handleSubmit}
              className="btn btn-primary login-btn"
              to=""
            >
              Submit
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
