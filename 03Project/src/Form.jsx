
function handleForm(event){
    event.preventDefault()
    console.log("For submitted");
}

function Form() {
  return (
    <form onSubmit={handleForm}>
      <input type="text" placeholder="Write something....." />
      <button >Submit</button>
    </form>
  );
}

export default Form;
