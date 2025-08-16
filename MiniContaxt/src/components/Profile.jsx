import { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  let { user } = useContext(UserContext);
  if (!user) return <div>Please Login First</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
