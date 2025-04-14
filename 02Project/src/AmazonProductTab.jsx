import AmazonProduct from './AmazonProduct.jsx'
function AmazonProductTab(){
    let style = {
        display:'flex',
        justifyContent:"center",
        alignItem:"center",
        backgroundColor:"teal"
    }
    return(
        <div style={style} >
            <AmazonProduct name="Logitech MX Master" idx={0} />
            <AmazonProduct name="Logitech MX Master" idx={1}/>
            <AmazonProduct name="Logitech MX Master" idx={2}/>
            <AmazonProduct name="Logitech MX Master" idx={3}/>
        </div>
    )
}
export default AmazonProductTab;