import { useContext, useState } from "react";
import UserContext from "../context/userContext";


function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const { SetUser,data } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    SetUser({ username, password });
  };

  return (
    <div>
      <h1>Log IN{data}</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
