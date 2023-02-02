import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import { lazy } from "react";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { LoginPage } from "./pages/LoginPage";

//const LoginPage = lazy((this.props) => import("./pages/LoginPage"));

function App(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/login" element={<LoginPage {...props} />} />
        <Route path="/dashboard" element={<LoginPage {...props} />} />
      </Routes>
    </>
  );
}

export default App;
