import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AxiosStore2 from "./soal2back2";
import LoginMas from "./login2";
import { ProductDetail } from "./soal2back2";
import { Navigate } from "react-router-dom";
import 
ProtectedRoute from "./protect";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginMas />,
  },
  {
    path: "/",
    element: <LoginMas />,
  },
  {
    path: "/product",
    element: (
      <ProtectedRoute>
        <AxiosStore2 />
      </ProtectedRoute>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <ProtectedRoute>
        <ProductDetail />
      </ProtectedRoute>
    ),
  },
]);

function Axioshop2() {
  return <RouterProvider router={router} />;
}

export default Axioshop2;