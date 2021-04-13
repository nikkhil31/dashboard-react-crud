import React from "react";

const Left = () => {
  return (
    <div className="left">
      <div className="logo">
        <img src="./images/Logo.png" alt="Logo" />
      </div>
      <div className="left-items">
        <ul>
          <li>
            <img src="./images/icons/Vector.png" alt="Overview" />
            <a href="#">Overview</a>
          </li>
          <li>
            <img src="./images/icons/cloud.png" alt="Overview" />
            <a href="#">Cloud</a>
          </li>
          <li>
            <img src="./images/icons/sketch.png" alt="Overview" />
            <a href="#">Sketch</a>
          </li>
          <li>
            <img src="./images/icons/experment.png" alt="Overview" />
            <a href="#">Experiment</a>
          </li>
          <li>
            <img src="./images/icons/security.png" alt="Overview" />
            <a href="#">Security</a>
          </li>
          <li>
            <img src="./images/icons/owner.png" alt="Overview" />
            <a href="#">Ownership</a>
          </li>
          <li>
            <img src="./images/icons/test.png" alt="Overview" />
            <a href="#">A/B Test</a>
          </li>
          <li>
            <img src="./images/icons/colors.png" alt="Overview" />
            <a href="#">Colors</a>
          </li>
        </ul>
      </div>
      <div className="logout">
        <img src="./images/icons/logout.png" alt="logOut" />
        <a href="#">Logout</a>
      </div>
    </div>
  );
};

export default Left;
