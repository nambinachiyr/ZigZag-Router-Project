const ProductDetails = async ({params})=>{
    let {id} = params
    console.log(params)
  try{
     const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await res.json()
    return data
  }
  catch(error){
    return {}
  }
}
export default ProductDetails