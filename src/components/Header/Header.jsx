import React, { useContext } from "react";
import styles from "./Header.module.css";
import { UserContext } from "../../context/userContext";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className={styles.header}>
      <h1>nc-games</h1>
      <div className={styles.profile}>
        <p style={{ marginRight: "1rem" }}>{loggedInUser.username}</p>
        <img className={styles.img} src={loggedInUser.avatar_url}></img>
      </div>
    </div>
  );
};

export default Header;
