import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Headphone from "./component/main/Headphone.tsx";
import Earbuds from "./component/main/Earbuds.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/headphone",
    element: <Headphone></Headphone>,
  },
  {
    path: "/earbuds",
    element: <Earbuds></Earbuds>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>
);
