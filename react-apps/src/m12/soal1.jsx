import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Komponen HomePage
const HomePage = () => {
  return <h1>Ini adalah halaman utama</h1>;
};

// Komponen AboutPage
const AboutPage = () => {
  return <h1>Ini adalah halaman about</h1>;
};

// Definisi router
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);

// Komponen utama aplikasi
function App() {
  return <RouterProvider router={router} />;
}

export default App;
