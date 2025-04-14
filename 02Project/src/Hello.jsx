function Hello({userName,textColor}){
    let style= {color:textColor}
    console.log({style})
    return (
        <h1 style={style}>Hellow {userName}!</h1>
    )
}
export default Hello;