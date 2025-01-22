import { createBrowserRouter, RouterProvider } from 'react-router';

function CobaRouter() {
    return <h2>halaman utama</h2>;
}

function SecondPlace() {
    return <h2>halaman baru</h2>;
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <CobaRouter />
    },
    {
        path: '/bukayangdua',
        element: <SecondPlace/>
    },

]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;