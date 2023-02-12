import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfilesPage.module.css";

const ProfilesPage = () => {
  const navigate = useNavigate();
  const {
    loggedInUser,
    setLoggedInUser,
    userIsLoggedIn,
    setUserIsLoggedIn,
    setGlobalError,
  } = useContext(UserContext);
  //TODO: MAP OVER MULTIPLE USERS
  return (
    <>
      <section>
        <h1 style={{ color: "white" }}>Log in:</h1>

        <article className={styles.card}>
          <h3 className={styles.h3}>weegembump</h3>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRayBko6Fh0dBJFOKGKGSDDuH6QeW1RrEKI3-qkTU_Y&s"
            }
            className={styles.profileImg}
            alt="profile"
          />
          <div className={styles.container}>
            <button className={styles.profilePageButtons} onClick={LogUserIn()}>
              log me in!
            </button>
            {userIsLoggedIn ? (
              <button
                className={styles.profilePageButtons}
                onClick={signUserOut()}
              >
                sign out!
              </button>
            ) : null}
          </div>
        </article>
      </section>
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
      setGlobalError({});

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
