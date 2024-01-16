import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { About, Error, HomeLayout } from "./pages";

const router = createBrowserRouter([{
  patch: "/",
  element: <HomeLayout />,
  errorElement: <Error />
}]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
