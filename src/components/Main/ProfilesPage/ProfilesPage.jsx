import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilesPage = () => {
  const navigate = useNavigate();
  const { setLoggedInUser, userIsLoggedIn, setUserIsLoggedIn } =
    useContext(UserContext);
  return (
    <>
      <h1>Log in screen</h1>
      <button onClick={LogUserIn()}>log me in!</button>
      {userIsLoggedIn ? (
        <button onClick={signUserOut()}>sign out!</button>
      ) : null}
    </>
  );

  function signUserOut() {
    return () => {
      setLoggedInUser({});
      setUserIsLoggedIn(false);
    };
  }

  function LogUserIn() {
    return () => {
      setUserIsLoggedIn(true);
      setLoggedInUser({
        username: "weegembump",
        avatar_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRayBko6Fh0dBJFOKGKGSDDuH6QeW1RrEKI3-qkTU_Y&s",
      });
      navigate("/reviews");
    };
  }
};

export default ProfilesPage;
