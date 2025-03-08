import recat from 'react'
function bgWebpage(){
    let bodyChange=(props)=>{
        let color=props.target.id
        document.body.style.backgroundColor=color
        console.log(props.target.id)
    }
    return(
        <>
        <button onClick={bodyChange} id="pink">Pink</button>
        <button onClick={bodyChange} id="green">Green</button>
        </>
    )
}
export default bgWebpage