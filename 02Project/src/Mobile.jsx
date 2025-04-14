import './Mobile.css'
function Mobile({brand,name,storage,price}){
    let style = {backgroundColor: price >23000 ? 'red':''}
    return(
        <div className="Mobile" style={style}>
            <h1>Brand:{brand}</h1>
            <h2>Name:{name}</h2>
            <h2>Storage:{storage}</h2>
            <h3>Price:{price}</h3>
            {price >25000 ?<p>Discount of 5%</p>:<a>Get Discount</a>}
        </div>

    )
}
export default Mobile;