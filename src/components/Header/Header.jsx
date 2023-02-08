import React, { useContext } from "react";
import styles from "./Header.module.css";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const navigate = useNavigate(); 
  return (
    <div className={styles.header}>
      <h1 onClick={() => navigate("/")}>nc-games</h1>
      <div className={styles.profile}>
        <p style={{ marginRight: "1rem" }}>{loggedInUser.username}</p>
        <img
          className={styles.img}
          src={loggedInUser.avatar_url}
          alt="avatar"
        ></img>
      </div>
    </div>
  );
};

export default Header;
