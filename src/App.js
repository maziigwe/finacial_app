import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
