import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../component/Layout";
import { Input } from "../components/common/Input";
import logo from "./../assets/signing-logo.png";
import "./loginpage.css";
import { HomeNavBar } from "./../components/HomeNavBar";

export const LoginPage = () => {
  const props = {
    title: "Diamond Continental Inc. - Login",
    description: "Welcome to the login page",
  };
  return (
    <Layout {...props}>
      {/* <HomeNavBar /> */}
      <div className="login-page">
        <div className="login-card">
          <div>
            <h1>Sign In</h1>
          </div>
          <p>Log in to your account to continue.</p>
          <div className="signing-logo">
            <img src={logo} alt="App Icon" />
          </div>
          <div>
            <Input />
            <Input
              label="Password"
              name="Password"
              placeholder="Password"
              type="password"
            />
            <Link className="btn btn-primary login-btn" to="/">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
