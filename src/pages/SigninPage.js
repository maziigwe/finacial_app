import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../component/Layout";
import { Input } from "../components/common/Input";
import logo from "./../assets/signing-logo.png";
import "./signin-page.css";
import { HomeNavBar } from "../components/HomeNavBar";
import { InputTextArea } from "../components/common/InputTextArea";
import { account_request_url } from "../constants";
import axios from "axios";
import { toast } from "react-toastify";

export const SignupPage = () => {
  const props = {
    title: "Landolt Central Inc. - Account Opening",
    description: "Welcome to Landolt Central",
  };
  const [loginData, setLoginData] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "",
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
      case "message":
        data = { ...loginData };
        data.message = value;
        setLoginData(data);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const account_request = await axios.post(account_request_url, loginData, {
        "Content-Type": "application/json",
      });
      const { message, code } = account_request.data;
      toast(
        "Your request has been received, Our customers support will respond to you via email. Thank you!",
        {
          type: "success",
          autoClose: false,
        }
      );
      setLoginData({ full_name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast(error.response.data.message, {
        type: "error",
        autoClose: false,
      });
      setLoginData({ full_name: "", email: "", phone: "", message: "" });
    }
  };
  return (
    <Layout {...props}>
      {/* <HomeNavBar /> */}
      <div className="signin-page">
        <div className="login-card">
          <div>
            <h1>Account Request</h1>
          </div>
          <p>Fill out this account opening request form.</p>
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
            <InputTextArea
              value={loginData.message}
              name="message"
              label="Message"
              placeholder="Add additional message (optional)"
              onChange={handleOnchange}
            />
            <Link
              to=""
              onClick={handleSubmit}
              className="btn btn-primary login-btn"
            >
              Submit Request
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
