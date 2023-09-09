import React, { useState } from "react";
import axios from "axios";
import GitContainer from "./GitContainer";
import "./GitCard.css";

const GitCard = () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((res) => {
        console.log(res);
        setUserData(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert(err);
      });
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your GitHub username"
            value={userName}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <GitContainer userData={userData} />
    </>
  );
};

export default GitCard;
