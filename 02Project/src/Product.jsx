import "./Product.css"
function Product({item="unknown",price,customer,Address}){
    return(
        <div className="Product">
            <h3>Name:{item}</h3>
            <h3>Price:{price}</h3>
        </div>

    )
}
export default Product;