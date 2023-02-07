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
    receiver_bank_name: "",
    receiver_account_no: "",
    receiver_routing_no: "",
    receiver_email: "",
    receiver_account_type: "savings",
    sender_account_id: "",
    sender_password: "",
    sender_account_type: "savings",
    sender_email: "",
  });
  const handleOnchange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    let data;
    switch (e.target.id) {
      case "receiver_bank_name":
        data = { ...loginData };
        data.receiver_bank_name = value;
        setLoginData(data);
        break;
      case "receiver_account_no":
        data = { ...loginData };
        data.receiver_account_no = value;
        setLoginData(data);
        break;
      case "receiver_routing_no":
        data = { ...loginData };
        data.receiver_routing_no = value;
        setLoginData(data);
        break;
      case "receiver_email":
        data = { ...loginData };
        data.receiver_email = value;
        setLoginData(data);
        break;
      case "receiver_account_type":
        data = { ...loginData };
        data.receiver_account_type = value;
        setLoginData(data);
        break;
      case "sender_account_id":
        data = { ...loginData };
        data.sender_account_id = value;
        setLoginData(data);
        break;
      case "sender_password":
        data = { ...loginData };
        data.sender_password = value;
        setLoginData(data);
        break;
      case "sender_account_type":
        data = { ...loginData };
        data.sender_account_type = value;
        setLoginData(data);
        break;
      case "sender_email":
        data = { ...loginData };
        data.sender_email = value;
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
              name="receiver_bank_name"
              type="text"
              label="Bank Name"
              placeholder="Enter receiver's bank name"
              onChange={handleOnchange}
            />
            <Input
              name="receiver_account_no"
              type="text"
              label="Account Number"
              placeholder="1234567890000"
              onChange={handleOnchange}
            />
            <Input
              name="receiver_routing_no"
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
              name="receiver_account_type"
              title="Account type"
              onChange={handleOnchange}
              options={[
                { label: "Savings", value: "savings" },
                { label: "Checking", value: "checkings" },
              ]}
            />

            <h3 className="form-subtitle">Sender's Information</h3>
            <Input
              name="sender_account_id"
              type="text"
              label="Account ID"
              placeholder="Enter your account ID"
              onChange={handleOnchange}
            />
            <Input
              name="sender_password"
              type="text"
              label="Password"
              placeholder="Enter password"
              onChange={handleOnchange}
            />

            <InputSelect
              name="sender_account_type"
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
