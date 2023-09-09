import React from "react";
import "./GitContainer.css";

const GitContainer = ({ userData }) => {
  return (
    <div>
      {userData && (
        <div className="gitContainer">
          <div className="imgDiv">
            <img src={userData.avatar_url} alt="user-profile-pic" />
            <pre>Profile Photo</pre>
          </div>
          <div className="whiteDiv">
            <div className="labelDiv">
              <span id="username">Username </span>
              <pre id="username">{userData.login}</pre>
              <br />
              <span id="name">Name </span>
              <pre id="name" >{userData.name}</pre>
              <br />
              <span >Number of Repositories </span>
              <pre id="repos">{userData.public_repos}</pre>
              <br />
              <span>Number of Public Gists </span>
              <pre id="gists">{userData.public_gists}</pre>
              <br />
              <span>Date of Profile Creation</span>
              <pre id="profile-creation">
                {" "}
                {new Date(userData.created_at).toISOString().slice(0, 10)}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitContainer;
