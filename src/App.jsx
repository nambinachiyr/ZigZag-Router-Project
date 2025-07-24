
import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import Products from "./Components/Products"
import productLoaders from "./Loaders/productLoaders"
import Product from "./Components/product"
import ProductDetails from "./Loaders/ProductDetails"
import Header from "./Wrapper/Header"
import Cart from "./Components/Cart"
let routes =[
    {
      path:"/",
      element:<Header />,
      children:[
        {
        path:"/",
        element:<Products/>,
        loader:productLoaders,
        hydrateFallbackElement:<p>Data Loading...</p>
    },
    {
      path:"cart",
      element:<Cart/>
    },
    {
      path:"products/:id",
      element:<Product />,
      loader:ProductDetails,
      hydrateFallbackElement:<p>Details fetching...</p>

    },
      ]
    },
    
  ]

 const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
})



const App = () => {
 
  return (
    <>    
    <RouterProvider router = {router}
    future={{v7_startTransition: true,}}/>  
    </>
    // 
   
  )
}

export default App