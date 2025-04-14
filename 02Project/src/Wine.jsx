
import "./Wine.css"
function Wine({name,price,category=null,SoldState=null}){
    return (
        <div className="Wine">
            <h1>Name:{name}</h1>
            <h2>Price:{price}</h2>
            <h3>Category:{category.a}</h3>
            <h3>SoldState:{SoldState.map((element)=><li>{element}</li>)}</h3>
        </div>
    )
}
export default Wine;