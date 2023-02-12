import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import styles from "./Error.module.css";

const Error = () => {
  const { globalError } = useContext(UserContext);
  console.log(globalError);
  if (Object.keys(globalError).length < 1) {
    return (
      <section className={styles.flexContainer}>
        <h1>404 Not Found</h1>
      </section>
    );
  }
  return (
    <section className={styles.flexContainer}>
      <h1>
        {globalError.code} {globalError.msg}
      </h1>
    </section>
  );
};

export default Error;
