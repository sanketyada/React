function greet(event) {
  console.log(event.target);
}
function Bye() {
  console.log("BY");
}

function Button() {
  return (
    <div>
      <button onClick={greet}>Click Me</button>
      <p onDoubleClick={Bye}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        temporibus facilis sed, ipsa quaerat maiores dolorum fuga asperiores
        repellat pariatur recusandae minima saepe iste natus. Perferendis, quae
        quos? Aspernatur, nesciunt.
      </p>
    </div>
  );
}

export default Button;
