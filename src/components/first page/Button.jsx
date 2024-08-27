import React from "react";
import "./Button.css";
import { FaLocationArrow } from "react-icons/fa";

import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="buttons">
      <Link to={"/PasswordGenerator"}>
        <button className="btn-hover color-3">
          Let's Go <FaLocationArrow />
        </button>
      </Link>
    </div>
  );
}

export default Button;
