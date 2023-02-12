import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext";

const Error = () => {
  const { globalError } = useContext(UserContext);
  console.log(globalError);
  return (
    <h1>
      {globalError.code} Bad Request {globalError.msg}
    </h1>
  );
};

export default Error;
