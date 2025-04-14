function Price({oldPrice,newPrice}){
    let oldStyle={
        textDecorationLine:'line-through'
    }
    let style={
        backgroundColor:"gold",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        height:"30px",
        display:"block",
    }
    return(
        <div style={style}>
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp;
            <span>{newPrice}</span>
        </div>

    )
}
export default Price;