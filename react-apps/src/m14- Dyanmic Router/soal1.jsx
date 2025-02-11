import {
    createBrowserRouter,
    RouterProvider,
    Link,
    useParams,
  } from "react-router-dom";
  
  const router = createBrowserRouter([
    { 
      path: "/",
      element: <BookList />,
    },
    {
      path: "/:id",
      element: <BookDetail />,
    },
  ]);
  
  function TokoBuku() {
    return <RouterProvider router={router} />;
  }
  
  export default TokoBuku;