import React from 'react';
import { createBrowserRouter, RouterProvider, Link, NavLink, Outlet } from 'react-router-dom';

// Komponen HomePage
const HomePage = () => {
  return <h1>Ini adalah halaman utama</h1>;
};

// Komponen AboutPage
const AboutPage = () => {
  return <h1>Ini adalah halaman about</h1>;
};

// Komponen NotFoundPage untuk menangani halaman tidak ditemukan
const NotFoundPage = () => {
  return <h1>Halaman tidak ditemukan</h1>;
};

// Komponen Layout untuk navigasi
const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink> |  
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>About</NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

// Definisi router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

// Komponen utama aplikasi
function App() {
  return <RouterProvider router={router} />;
}

export default App;
