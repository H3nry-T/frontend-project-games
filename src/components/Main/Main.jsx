import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import styles from "./Main.module.css";
import ReviewsPage from "./ReviewsPage/ReviewsPage";
import SingleReviewPage from "./SingleReviewPage/SingleReviewPage";

const Main = () => {
  const navigate = useNavigate();
  const { setLoggedInUser, userIsLoggedIn, setUserIsLoggedIn } =
    useContext(UserContext);

  return (
    <main className={styles.main}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Log in screen</h1>
              <button
                onClick={() => {
                  setUserIsLoggedIn(true);
                  setLoggedInUser({
                    username: "weegembump",
                    avatar_url:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRayBko6Fh0dBJFOKGKGSDDuH6QeW1RrEKI3-qkTU_Y&s",
                  });
                  navigate("/reviews");
                }}
              >
                log me in!
              </button>
              {userIsLoggedIn ? (
                <button
                  onClick={() => {
                    setLoggedInUser({});
                    setUserIsLoggedIn(false);
                  }}
                >
                  sign out!
                </button>
              ) : null}
            </>
          }
        />
        <Route path="/*" element={<ReviewsPage />} />
        <Route path="/reviews/:review_id" element={<SingleReviewPage />} />
      </Routes>
    </main>
  );
};

export default Main;
