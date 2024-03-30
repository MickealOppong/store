import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { About, Cart, Checkout, ErrorPage, Favourite, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from "./pages/index"

//loaders

import { loader as checkoutLoader } from './pages/Checkout'
import { loader as landingLoader } from './pages/Landing'
import { loader as ordersLoader } from './pages/Orders'
import { loader as productLoader } from './pages/Products'
import { loader as singleProductLoader } from './pages/SingleProduct'

//actions
import { action as checkoutAction } from './components/CheckoutForm'
import { action as loginAction } from './pages/Login'
import { action as registerAction } from './pages/Register'
import { store } from "./store"
const router = createBrowserRouter([
  {
    path: '',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader
      },
      {
        path: 'cart',
        element: <Cart />,
        errorElement: <ErrorPage />
      },
      {
        path: 'favourite',
        element: <Favourite />,
        errorElement: <ErrorPage />
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorPage />
      },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <ErrorPage />,
        loader: checkoutLoader(store),
        action: checkoutAction(store)
      },
      {
        path: 'orders',
        element: <Orders />,
        errorElement: <ErrorPage />,
        loader: ordersLoader(store),
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorPage />,
        loader: productLoader,
      },
      {
        path: 'singleProduct/:id',
        element: <SingleProduct />,
        errorElement: <ErrorPage />,
        loader: singleProductLoader
      }
    ]
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <ErrorPage />,
    action: loginAction(store)
  },
  {
    path: 'register',
    element: <Register />,
    errorElement: <ErrorPage />,
    action: registerAction
  }
])
const App = () => {
  return <section>
    <RouterProvider router={router} />
  </section>

}

export default App
