
import { useNavigate, useOutletContext } from 'react-router'
import '../Styles-Comp/cartStyle.css'

const Cart = () => {
    const navigate = useNavigate()
    let{cart,dispatch} = useOutletContext()
    // back Button function
    function backToProduct(){
         navigate("/")
    } 

    // Total Price 
   const totalPrice =  cart.reduce((acc,item)=>{
                                return (acc+(item.price*item.quantity))
                            },0)

   
  return (
    <>
    <div className='cart_Page'>
       <div className="cart_container">
          {
            cart.length > 0 ? ( 
                cart.map(item => (
                       <div key={item.id} className="item" >
                            <div className='item_img'>
                                <img src={item.image} alt="" width={150}/>
                            </div>
                            <div>
                                <h2 className="item_title">{item.title}</h2>
                                
                                <p className="item_price" >$ {((item.price)*(item.quantity)).toFixed(2)}</p>
                                
                                <div className="P_ses">
                                    <p>
                                    <span className="rate_item">★ {item.rating.rate}</span>
                                    <span className="item_cnt">{item.count}</span>
                                    </p>
                                    <div className='quantity_ses'>
                                        <button className='plus' onClick={()=>dispatch({type:"INCREASE",product:item})}>+</button>
                                        <span className='quantity'>{item.quantity}</span>
                                        <button className='minus' onClick={()=>dispatch({type:"DECREASE",product:item})}>-</button>
                                    </div>
                                </div>
                               
                                    <button className='remove' onClick={()=>dispatch({type:"REMOVE" , product:item})}>X Remove</button>
                            </div>
                        </div>                         
                       
                    

                ))
            ) : (<p>No Cart Item Go And Purchase</p>)
          }
       </div>
       {
        cart.length > 0 ? (
            <div className='price_details' >
                    <h3>PRICE DETAILS</h3>
                    <hr />

                    <p>
                        <span className='items'>Price({cart.length} items)</span>
                        <span className='pri_span'>$ {totalPrice.toFixed(2)}</span>
                    </p>
                    <p>
                        <span className='discount'>Discount - 10%</span>
                        <span className='dis_span'>$ {(totalPrice*0.1).toFixed(1)}</span>
                    </p>
                <hr />
                <h3>
                    <span className='total_span'>Total Amount</span>
                    <span className='total_Amount'>$ {((totalPrice)-(totalPrice*0.1)).toFixed(1)}</span>
                </h3>
            </div>
        ):(<></>)
       }
        
    </div>
    <button className="back" onClick={backToProduct}>Back</button>
    </>
 )
}

export default Cart