import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Headphone from "./component/main/Headphone.tsx";
import Earbuds from "./component/main/Earbuds.tsx";
import { Provider } from "react-redux";
import store from "./component/redux/store.ts";
import Login from "./component/header/Login.tsx";
import SignIn from "./component/header/SignIn.tsx";
import Cart from "./component/header/Cart.tsx";
import Reset from "./component/header/Reset.tsx";
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
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
  {
    path: "/resetPassword",
    element: <Reset></Reset>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
