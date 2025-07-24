
import { Link, useLoaderData } from 'react-router'
import productLoaders from '../Loaders/productLoaders.js'
import  '../Styles-Comp/productStyle.css'



const Products = () => {
    // Loading data from productLoaders Component
    let products = useLoaderData();
    console.log(products);  
    
  return (
    <>
    {/* <Header cartCount={cartCount}/> */}
      <div className="container">       
        {
          products.map(product =>(
            <Link to={`/products/${product.id}`} style={{textDecoration:"none"}} key ={product.id}>
              <div className="cards" key = {product.id} >
                <div className="Image">
                    <img src= {product.image} alt=""  height={220}/>
                </div>
                <p className="title">{product.title}</p>
                <p className="fd">Free Delivery</p>

                <div className="pricing-ses">
                    <p className='price'>$ {product.price}</p>
                    <p className="pricing">
                        <span className="rate">★ {product.rating.rate}</span>
                        <span className="cnt">{product.rating.count}</span>
                    </p>
                </div>
              </div>
            </Link>
          ))
        }
            
         
      </div>
    </>
  )
}

export default Products