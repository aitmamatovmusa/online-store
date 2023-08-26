import { createBrowserRouter } from "react-router-dom";
import Home from "../features/products/Home";
import Cart from "../features/cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
