import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../component/Layout";
import { Input } from "../components/common/Input";
import logo from "./../assets/signing-logo.png";
import axios from "axios";
import { toast } from "react-toastify";
import "./loginpage.css";
import { HomeNavBar } from "./../components/HomeNavBar";
import { login_url } from "../constants";

export const LoginPage = () => {
  const props = {
    title: "Diamond Continental Inc. - Login",
    description: "Log into your account.",
  };
  const navigate = useNavigate();
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const login_request = await axios.post(login_url, loginData, {
        "Content-Type": "application/json",
      });
      const { data } = login_request;

      //  console.log(data);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", JSON.stringify(data.token));
      toast("Logged In", {
        type: "success",
        autoClose: 5000,
      });
      setLoginData({ account_id: "", password: "" });
      navigate("/dashboard");
      // history.push("/dashboard");
    } catch (error) {
      console.log(error.response);
      if (error.response.status == 400) {
        toast(error.response.data.message, {
          type: "error",
          autoClose: 5000,
        });
      } else if (error.response.status == 401) {
        toast(
          error.response.data.message +
            " If you have forgotten your login details, Please contact support.",
          {
            type: "error",
            autoClose: 8000,
          }
        );
      } else {
        toast("Login failed", {
          type: "error",
          autoClose: 5000,
        });
      }
      setLoginData({ account_id: "", password: "" });
    }
  };
  return (
    <Layout {...props}>
      {/* <HomeNavBar /> */}
      <div className="login-page">
        <div className="login-card">
          <div>
            <h1>Sign In</h1>
          </div>
          <p>Log into your account to continue.</p>
          <div className="signing-logo">
            <img src={logo} alt="App Icon" />
          </div>
          <div>
            <Input
              value={loginData.account_id}
              type="text"
              onChange={handleOnchange}
            />
            <Input
              value={loginData.password}
              onChange={handleOnchange}
              label="Password"
              name="Password"
              placeholder="Password"
              type="password"
            />
            <Link
              to=""
              onClick={handleSubmit}
              className="btn btn-primary login-btn"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
