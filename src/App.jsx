
import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import Products from "./Components/Products.jsx"
import productLoaders from "./Loaders/productLoaders.js"
import Product from "./Components/product.jsx"
import ProductDetails from "./Loaders/ProductDetails.js"
import Header from "./Wrapper/Header.jsx"
import Cart from "./Components/Cart.jsx"
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