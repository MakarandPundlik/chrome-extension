import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

function Meme(props) {
  const location = useLocation();
  const isAuthenticated = location.isAuthenticated;
  const [[setup, punchline], setJoke] = useState([]);
  useEffect(async () => {
    if (!isAuthenticated) props.history.push("/");

    await fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => {
        setJoke([data.setup, data.punchline]);
      });
  }, []);
  return (
    <div className="meme">
      {setup}
      <br />
      <br />
      {punchline}
    </div>
  );
}

export default Meme;
