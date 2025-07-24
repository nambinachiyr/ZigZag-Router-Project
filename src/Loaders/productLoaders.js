const productLoaders = async()=>{
    try{
        const res = await fetch(`https://fakestoreapi.com/products`)
        const data = await res.json();
        return data;
    }
    catch(error){
        return [];
    }
}
export default productLoaders