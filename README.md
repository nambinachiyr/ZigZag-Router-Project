# React Router Shopping Cart

#####This is a simple React project that demonstrates:
-Using **React Router v7**
-Adding item to a cart
-Managing cart state with **useReducer**
-updating quantity(+/-) for each item
-updating the total price Amount Dynamically

## Fetures
-Product listing page 
-Add to cart button
-Cart page with quantity controls
-Increase and Decrease itm quantity
-Remove items from cart
-Cart count in the header

## Project structure
-src
  | -Components
        | - cart.jsx
        | - Product.jsx
        | - Products.jsx      
  | -Loaders
        | - CartLoaders.js
        | - ProductDetails.js
        | - ProductLoaders.js
  | -Styles-Comp
        | - cartStyle.css
        | - HeaderStyle.css
        | - productStyle.css
        | - SingleProduct.css
  | -Wrapper
        | - Header.jsx
  | -App.jsx
  | - Main.jsx           

  ###How to run
  **Clone the repo**
  git clone https://github.com/nambinachiyr/ZigZag-Router-Project.git
   
   -install dep
   --npm i
   --npm run dev
   --Open localhost

   #How to Works
   -Product Page: Shows all products.
   -Add to cart: Add an item with quantity:1.if item exist show alert.
   -Cart Page:
          -Show all added items.
          -+ and - buttons update only tht product's quantity.
   -Header: Shows tostl cart count.       