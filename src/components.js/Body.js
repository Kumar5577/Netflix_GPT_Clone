import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Browse from "./Browse";
import Login from "./Login"

const Body = () => {


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <RouterProvider router={appRouter}>
      <Login />
    </RouterProvider>
  );
};
export default Body;
