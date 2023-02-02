import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../component/Layout";
import { Input } from "../components/common/Input";
import logo from "./../assets/signing-logo.png";
import "./signin-page.css";
import { HomeNavBar } from "../components/HomeNavBar";
import { InputTextArea } from "../components/common/InputTextArea";

export const SignupPage = () => {
  const props = {
    title: "Diamond Continental Inc. - Login",
    description: "Welcome to the login page",
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
            <h1>Create Account</h1>
          </div>
          <p>Fill out this account opening request form.</p>
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
            <InputTextArea
              label="Message"
              placeholder="Add additional message (optional)"
            />
            <Link
              onClick={handleSubmit}
              className="btn btn-primary login-btn"
              to=""
            >
              Submit Request
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
