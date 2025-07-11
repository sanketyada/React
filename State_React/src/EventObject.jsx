import React from 'react'

function EventObject() {
    function handleClick(event){
        // event.target.id="Snaker"
        console.log(event.target.baseURI)
    }
    function handleForm(e){
        e.preventDefault()
        console.log("snaket Yadav")
    }
  return (
    // <div>
    //   <button onClick={handleClick}>Click Here</button>
    // </div>
    <form  onSubmit={handleForm}>
        <input type="text"/>
        <button>Handle Form</button>
    </form>
  )
}
export default EventObject
