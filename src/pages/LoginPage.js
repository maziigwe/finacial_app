import React from "react";
import { Layout } from "../component/Layout";
import { Input } from "../components/common/Input";
import logo from "./../assets/signing-logo.png";
import "./loginpage.css";

export const LoginPage = () => {
  const props = {
    title: "Diamond Continental Inc. - Login",
    description: "Welcome to the login page",
  };
  return (
    <Layout {...props}>
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
          </div>
        </div>
      </div>
    </Layout>
  );
};
