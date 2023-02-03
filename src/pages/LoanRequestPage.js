import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../component/Layout";
import { Input } from "../components/common/Input";
import logo from "./../assets/signing-logo.png";
import "./signin-page.css";
import { HomeNavBar } from "../components/HomeNavBar";

export const LoanRequestPage = () => {
  const props = {
    title: "Diamond Continental Inc. - Loan & Mortgages",
    description: "Loan request form.",
  };
  const [loginData, setLoginData] = useState({ account_id: "", password: "" });
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
      {/* <HomeNavBar /> */}
      <div className="signin-page">
        <div className="login-card">
          <div>
            <h1>Loan Application Form </h1>
          </div>
          <p>Fill and submit the loan & mortgages request form.</p>
          <div className="signing-logo">
            <img src={logo} alt="App Icon" />
          </div>
          <div>
            <Input
              name="full_name"
              type="text"
              label="Full Name"
              placeholder="Enter your legal name"
              onChange={handleOnchange}
            />
            <Input
              name="email"
              type="email"
              label="Email Address"
              placeholder="Enter your email address"
              onChange={handleOnchange}
            />
            <Input
              name="phone"
              type="text"
              label="Phone Number"
              placeholder="+1-234-567-90"
              onChange={handleOnchange}
            />
            <Input
              name="address"
              type="text"
              label="Current Address"
              placeholder="Enter current address"
              onChange={handleOnchange}
            />
            <Input
              name="ssn"
              type="text"
              label="SSN"
              placeholder="Enter your social security number"
              onChange={handleOnchange}
            />
            <Input
              name="passport"
              type="file"
              label="Valid ID"
              onChange={handleOnchange}
            />

            <Link
              onClick={handleSubmit}
              className="btn btn-primary login-btn"
              to=""
            >
              Submit Application
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
