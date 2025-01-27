import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Komponen halaman utama
const HomePage = () => {
  return <h1>Ini adalah halaman utama</h1>;
};

// Komponen halaman about
const AboutPage = () => {
  return <h1>Ini adalah halaman about</h1>;
};

// Komponen untuk menangani halaman tidak ditemukan (404)
const NotFoundPage = () => {
  return <h1>Halaman tidak ditemukan</h1>;
};

// Definisi router dengan errorElement untuk menangani error 404
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '*',  // Menangani semua path yang tidak ada
    element: <NotFoundPage />,
  },
]);

// Komponen utama aplikasi
function App() {
  return <RouterProvider router={router} />;
}

export default App;
