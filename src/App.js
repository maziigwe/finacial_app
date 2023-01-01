import logo from "./logo.svg";
import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
      </Routes>
    </>
  );
}

export default App;
