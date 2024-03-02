import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, ErrorPage } from "./pages";
import Layout from "./Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
