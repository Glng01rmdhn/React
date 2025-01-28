import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function DashboardPage() {
  return (
    <div>
      <h1>Halaman Dashboard</h1>
      <nav>
        <Link to="/">Dashboard Utama</Link> | <Link to="/settings">Pengaturan</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function SettingsPage() {
  return (
    <div>
      <h2>Ini adalah halaman pengaturan.</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardPage />}>
        <Route index element={<DashboardPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);