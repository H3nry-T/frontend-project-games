import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfilesPage.module.css";
import { getAllUsers } from "../../../utils/axiosProfilesPage";

const ProfilesPage = () => {
  const navigate = useNavigate();
  const {
    loggedInUser,
    setLoggedInUser,
    userIsLoggedIn,
    setUserIsLoggedIn,
    setGlobalError,
  } = useContext(UserContext);

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((usersFromApi) => {
        setAllUsers(usersFromApi);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //{username: "tickle122", name: "Tom Tickle", avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/d…r-Tickle-9a.png/revision/latest?cb=20180127221953"}

  //TODO: MAP OVER MULTIPLE USERS
  return (
    <>
      <section>
        <h1 style={{ color: "white" }}>Log in:</h1>
        {allUsers.map((user) => {
          return (
            <article className={styles.card} key={user.username}>
              <h3 className={styles.h3}>{user.username}</h3>
              <h3 className={styles.h3}>{user.name}</h3>
              <img
                src={user.avatar_url}
                className={styles.profileImg}
                alt="profile"
              />
              <div className={styles.container}>
                <button
                  className={styles.profilePageButtons}
                  onClick={LogUserIn(user.username, user.avatar_url)}
                >
                  log me in!
                </button>
                {userIsLoggedIn && loggedInUser.username === user.username ? (
                  <button
                    className={styles.profilePageButtons}
                    onClick={signUserOut()}
                  >
                    sign out!
                  </button>
                ) : null}
              </div>
            </article>
          );
        })}
      </section>
    </>
  );

  function signUserOut() {
    return () => {
      setLoggedInUser({});
      setUserIsLoggedIn(false);
    };
  }

  function LogUserIn(username, avatar_url) {
    return () => {
      setGlobalError({});

      setUserIsLoggedIn(true);
      setLoggedInUser({
        username: username,
        avatar_url: avatar_url,
      });
      navigate("/reviews");
    };
  }
};

export default ProfilesPage;
