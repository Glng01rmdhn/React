import { createBrowserRouter,RouterProvider,useParams } from 'react-router-dom';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <DetailProduct />,
    },
    {
        path: '/id',
        element: <DetailProduct />,
    },
]);