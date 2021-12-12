import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./pages/account";
import LandingPage from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import SendMoney from "./pages/sendMoney";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* test truocws */}
        <Route path="/send" element={<SendMoney />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
