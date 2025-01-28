import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

// Komponen ProfilePage
const ProfilePage = () => {
  const { userId } = useParams(); // useParams digunakan untuk Mengambil Id dari URL
  return (
    <div>
      <h1>Halaman Profil</h1>
      <p>Ini adalah halaman profil untuk pengguna dengan ID: {userId}</p>
    </div>
  );
};

// Komponen Utama (App)
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
    </Router>
    // path="/profile/:userId" adalah rute yang bisa menangkap ID pengguna sebagai parameter.
  );
};

export default App;
