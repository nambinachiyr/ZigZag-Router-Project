
import { useLoaderData, useNavigate, useOutletContext } from "react-router"
import '../Styles-Comp/SingleProduct.css'


const Product = () => {
  const pd = useLoaderData()
  
  // Import this method for send the data to parent
  // This is destructure method
  const {cart,dispatch} = useOutletContext()

  // navigate method
  let navigate = useNavigate()

  //  Navigate to homePage
  function handleBack(){
    // Just wait for 4MS
      setTimeout(()=>{
        // One step back
         navigate(-1)           
      },300)
  }
  // console.log(cart)
  return (
    <>
   
      <div className="product_del" key = {pd.id}>
        <div className="IG">
          <img id="img" src={pd.image} alt="" />
        </div>
        <div className="see_2">
           <h2 className="pd_title">{pd.title}</h2>
           <p className="pd_price">$ {pd.price}</p>
           
           
           
           <div className="P_ses">
             <p>
              <span className="rate_pd">★ {pd.rating.rate}</span>
              <span className="pd_cnt">{pd.rating.count}</span>
             </p>
             <div>
                <button onClick={()=>dispatch({type:"ADD" ,product:pd})}  className="ADD_Btn">Add To Cart</button>
              </div>
              
           </div>
           <p className="des">Description</p>
           <p className="pd_des">{pd.description}</p>
        </div>
     </div>
     <button className="back" onClick={handleBack}>Back</button>
    </>
  )
}

export default Product