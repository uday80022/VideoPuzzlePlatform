import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import OTPVerification from "./components/OTPVerification";
import ChangePassword from "./components/ChangePassword";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import CheckOTPPage from "./components/CheckOTPPage";
import ResetPasswordPage from "./components/ResetPasswordPage";
import PuzzlePage from "./components/PuzzlePage";
import { EmailProvider } from "./components/EmailContext";

function App() {
  return (
    <Router>
      <div className="App">
        <EmailProvider>
          <Navbar className='nav' /> {/* Include the Navbar component */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/otp" element={<OTPVerification />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
            <Route path="/checkotp" element={<CheckOTPPage />} />
            <Route path="/resetpassword" element={<ResetPasswordPage />} />
            <Route path="/puzzlepage" element={<PuzzlePage />} />
          </Routes>
        </EmailProvider>
      </div>
    </Router>
  );
}

export default App;
