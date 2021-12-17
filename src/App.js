import React, { useState } from "react";
import { Route, Routes, Redirect, Navigate } from "react-router-dom";
import adminStorageKeys from "./constant/admin-storage-keys";
import Account from "./pages/account";
import AdminHomePage from "./pages/admin/components/homepage";
import LoginAdmin from "./pages/admin/login";

import ErrorPage from "./pages/error";
import LandingPage from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import SendMoney from "./pages/sendMoney";

function App() {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem(adminStorageKeys.TOKEN) != null
  );
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* test truocws */}
        <Route path="/send" element={<SendMoney />} />
        <Route path="/account" element={<Account />} />
        <Route
          path="/admin"
          element={isLogin ? <AdminHomePage /> : <LoginAdmin />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
