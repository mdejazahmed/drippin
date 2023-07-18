import Home from "./pages/home/Home"
import Deals from "./pages/deals/Deals"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Product from "./pages/product/Product";
import Bag from "./pages/bag/Bag"
import Payment from "./pages/payment/Payment";
import Account from "./pages/account/Account";
import Contact from "./pages/contact/Contact";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/deals",
      element: <Deals/>,
    },
    {
      path: "/shop",
      element: <Shop/>,
    },
    {
      path: "/product",
      element: <Product/>,
    },
    {
      path: "/bag",
      element: <Bag/>,
    },
    {
      path: "/payment",
      element: <Payment/>,
    },
    {
      path: "/account",
      element: <Account/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
