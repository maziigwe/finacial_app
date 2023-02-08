import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../component/Layout";
import { Input } from "../components/common/Input";
import logo from "./../assets/signing-logo.png";
import "./signin-page.css";
import { HomeNavBar } from "../components/HomeNavBar";
import { account_request_url } from "../constants";
import axios from "axios";
import { toast } from "react-toastify";

export const LoanRequestPage = () => {
  const props = {
    title: "Landolt Central Inc. - Loan & Mortgages",
    description: "Loan request form.",
  };
  const [loginData, setLoginData] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "message",
    address: "",
    ssn: "",
    passport: "",
    requestType: "loan",
  });
  const handleOnchange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    let data;
    switch (e.target.id) {
      case "full_name":
        data = { ...loginData };
        data.full_name = value;
        setLoginData(data);
        break;
      case "email":
        data = { ...loginData };
        data.email = value;
        setLoginData(data);
        break;
      case "phone":
        data = { ...loginData };
        data.phone = value;
        setLoginData(data);
        break;
      case "address":
        data = { ...loginData };
        data.address = value;
        setLoginData(data);
        break;
      case "ssn":
        data = { ...loginData };
        data.ssn = value;
        setLoginData(data);
        break;
      case "passport":
        data = { ...loginData };
        data.passport = value;
        setLoginData(data);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async () => {
    console.log(loginData);
    //passport is not sent
    try {
      const account_request = await axios.post(account_request_url, loginData, {
        "Content-Type": "application/json",
      });
      const { message, code } = account_request.data;
      toast(
        "Your loan request has been received, Our customers support will respond to you via email. Thank you!",
        {
          type: "success",
          autoClose: false,
        }
      );
      setLoginData({
        full_name: "",
        email: "",
        phone: "",
        message: "message",
        address: "",
        ssn: "",
        passport: "",
        requestType: "loan",
      });
    } catch (error) {
      toast(error.response.data.message, {
        type: "error",
        autoClose: false,
      });
      setLoginData({
        full_name: "",
        email: "",
        phone: "",
        message: "message",
        address: "",
        ssn: "",
        passport: "",
        requestType: "loan",
      });
    }
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
              value={loginData.full_name}
              name="full_name"
              type="text"
              label="Full Name"
              placeholder="Enter your legal name"
              onChange={handleOnchange}
            />
            <Input
              value={loginData.email}
              name="email"
              type="email"
              label="Email Address"
              placeholder="Enter your email address"
              onChange={handleOnchange}
            />
            <Input
              value={loginData.phone}
              name="phone"
              type="text"
              label="Phone Number"
              placeholder="+1-234-567-90"
              onChange={handleOnchange}
            />
            <Input
              value={loginData.address}
              name="address"
              type="text"
              label="Current Address"
              placeholder="Enter current address"
              onChange={handleOnchange}
            />
            <Input
              value={loginData.ssn}
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
