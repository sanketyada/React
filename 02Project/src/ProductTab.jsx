import Product from './Product'
function ProductTab(){
    let arr= [1,2,3,4,5]
    let obj = {name:'Snaket' ,age:21}
    return(
        <div>
            <Product item="Kishan Jam" price={100}/>
            <Product item="Khajur" price={325}/>
            <Product item="Maggi" price={70}/>
        </div>
    )
}
export default ProductTab;