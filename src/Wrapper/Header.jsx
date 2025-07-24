
import { useReducer, useState } from 'react'
import ImgCart from '../assets/shopping-cart (1).png'
import '../Styles-Comp/HeaderStyle.css'
import { Link, Outlet } from 'react-router'

// this reducer fun and initialState
const initialState = [];
// Ruducer function start here
function reducer(state,action){ 
  console.log(action.product.id,"id")
   
    // Conditional Operator fro using ADD and REMOVE 
      switch (action.type){
      case "ADD": 
      // store that item in that variable
     
        const exists = state.find(item=>item.id===action.product.id) 
        console.log(exists) 
        
        // If the item is there send alert
        // And print the original array
        if(exists){
          alert("This item is already in");
          console.log(state,"ADD")
          return state
        }
        // else Modify the  state -> ADD using spreadOperator
      return [...state,{...action.product,quantity:1}]
      // Increase Method of quantity
      case "INCREASE":{
        return state.map(item=>(
          item.id === action.product.id ?
          {...item,quantity:item.quantity+1}:item
        ))
      }
      // decrease 
      case "DECREASE":{      
         return state.map(item=>(         
            item.id === action.product.id ?           
          {...item,quantity:item.quantity>1?item.quantity-1:item.quantity}:
          item          
        ))
       }
       // REMOVE section
      case "REMOVE":{
        // IF the confirm is ok then
         if(confirm("Are You Sure! Do you Want Remove it?")){
            
          //  Using filter method for create new array Put that array without this item
            let update =  state.filter(card=>card.id != action.product.id)  
          //  confirm result this Modify state
          console.log(update,"UPDATE")
            return state = update
            // Same in this case
            // return state =[...update]
         }
        //  NOt ok then this without any modifiy
         return state        
      }      
      default: return state
      }
}
// Header Component
function Header() {
   
  // use this hook for State handling
  let [cart,dispatch] = useReducer(reducer,initialState)
 
  console.log(cart)

  return (
    <>
    <div className='headerDiv'>
        <h3 className='H_title'>Zig Zag</h3>
        <input type="text" name="text" id="searchInput" placeholder='🔍︎ search...'/>
        <div className="cartSection">
            <Link to={"/cart/"} >
               <img className='cart_counter' src={ImgCart} alt="" width={35} />
            </Link>
            <span className='count_cart' >{cart.length}</span>
        </div>
    </div>
    <Outlet context={{cart,dispatch}}>
      
    </Outlet>
    
    
    </>
  )
}

export default Header