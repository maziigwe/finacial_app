import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../component/Layout";
import { Input } from "../components/common/Input";
import logo from "./../assets/signing-logo.png";
import axios from "axios";
import { toast } from "react-toastify";
import { InputTextArea } from "../components/common/InputTextArea";
import "./admin-create-account.css";
import { InputSelect } from "../components/common/InputSelect";
import { create_account_url } from "./../constants";

export const AdminCreateAccount = () => {
  const props = {
    title: "Diamond Continental Inc. - Create Account",
    description: "Create a new account",
  };
  const [loginData, setLoginData] = useState({
    account_id: "",
    full_name: "",
    password: "",
    email: "",
    account_no: "",
    routing_no: "",
    account_type: "savings",
    phone: "",
    address: "",
    pin: "",
    photo: null,
  });
  const handleOnchange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    let data;
    switch (e.target.id) {
      case "account_id":
        data = { ...loginData };
        data.account_id = value;
        setLoginData(data);
        break;
      case "password":
        data = { ...loginData };
        data.password = value;
        setLoginData(data);
        break;
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
      case "account_no":
        data = { ...loginData };
        data.account_no = value;
        setLoginData(data);
        break;
      case "routing_no":
        data = { ...loginData };
        data.routing_no = value;
        setLoginData(data);
        break;
      case "account_type":
        data = { ...loginData };
        data.account_type = value;
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
      case "pin":
        data = { ...loginData };
        data.pin = value;
        setLoginData(data);
        break;
      case "photo":
        value = e.target.files[0];
        data = { ...loginData };
        data.photo = value;
        setLoginData(data);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      for (const key in loginData) {
        formData.append(key, loginData[key]);
      }
      const login = await axios.post(create_account_url, formData, {
        "Content-Type": "multipart/form-data",
      });
      console.log(login.data);
      toast("Account created!", {
        type: "success",
        autoClose: 5000,
      });
      setLoginData({ full_name: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert(error.response.data.message);
    }
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
              value={loginData.account_no}
              name="account_no"
              type="text"
              label="Account Number"
              placeholder="1234567890000"
              onChange={handleOnchange}
            />
            <Input
              value={loginData.routing_no}
              name="routing_no"
              type="text"
              label="Routing Number"
              placeholder="123456789"
              onChange={handleOnchange}
            />

            <Input
              value={loginData.pin}
              name="pin"
              type="text"
              label="Pin"
              placeholder="123456"
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
              value={loginData.address}
              name="address"
              type="text"
              label="Current Address"
              placeholder="Enter current address"
              onChange={handleOnchange}
            />
            <Input
              value={loginData.account_id}
              name="account_id"
              type="text"
              label="Account ID"
              placeholder="Enter account ID"
              onChange={handleOnchange}
            />
            <Input
              value={loginData.password}
              name="password"
              type="text"
              label="Password"
              placeholder="Enter password"
              onChange={handleOnchange}
            />
            <Input
              name="photo"
              type="file"
              label="Photo"
              onChange={handleOnchange}
            />

            <Link
              to=""
              onClick={handleSubmit}
              className="btn btn-primary login-btn"
            >
              Submit Account
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
