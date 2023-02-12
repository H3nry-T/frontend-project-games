import React, { useContext } from "react";
import styles from "./Header.module.css";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { loggedInUser, userIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <h1 onClick={navigateAllReviews()}>nc-games</h1>
      {!userIsLoggedIn ? null : (
        <div className={styles.profile} onClick={navigateLogIn()}>
          <p style={{ marginRight: "1rem" }}>{loggedInUser.username}</p>
          <img
            className={styles.img}
            src={loggedInUser.avatar_url}
            alt="avatar"
          ></img>
        </div>
      )}
    </div>
  );

  function navigateLogIn() {
    return () => navigate("/");
  }

  function navigateAllReviews() {
    return () => {
      if (userIsLoggedIn) navigate("/reviews");
      else navigate("/");
    };
  }
};

export default Header;
