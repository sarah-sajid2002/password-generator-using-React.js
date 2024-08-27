import React, { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import styles from "./MainPage.module.css";
function MainPage() {
  let [showPassword, setShowPassword] = useState(false);
  let [state, setState] = useState({ name: "", email: "", password: "" });
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const allCharacters = [
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", // Uppercase letters
    ..."abcdefghijklmnopqrstuvwxyz", // Lowercase letters
    ..."0123456789", // Numbers
    ..."!@#$%^&*()_+[]{}|;:,.<>?/~`", // Symbols
  ];
  function generateRandomPassword(length = 16) {
    let password = "";
    for (let index = 0; index < length; index++) {
      let randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
    }
    return password;
  }
  function handleTogglePasswordState() {
    setShowPassword(!showPassword);
  }
  function handleChange(e) {
    let oldData = { ...state };
    let currentField = e.target.name;
    let currentValue = e.target.value;
    oldData[currentField] = currentValue;
    setState(oldData);
  }

  function handelSubmit() {
    if (!state.name || !state.password || !state.email) {
      toast("Fill al fields");
    } else {
      console.log("done");
      navigate("/Thanks!");
    }
  }
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);

    if (event.target.checked) {
      let oldData = { ...state };
      console.log(oldData);
      oldData["password"] = generateRandomPassword();
      setState(oldData);
    } else {
      let oldData = { ...state };
      oldData["password"] = "";
      setState(oldData);
    }
  };
  return (
    <div className={styles.container}>
      <ToastContainer />
      <form>
        <p>Password Generator</p>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={state.name}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className={styles.password}
          name="password"
          value={state.password}
          onChange={(e) => handleChange(e)}
        />
        {showPassword ? (
          <IoEyeSharp
            className={styles.eyeIcon}
            onClick={handleTogglePasswordState}
          />
        ) : (
          <FaEyeSlash
            className={styles.eyeIcon}
            onClick={handleTogglePasswordState}
          />
        )}
        <br />
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label style={{ color: "white" }} htmlFor="">
          generate a random password
        </label>
        <br />

        <input onClick={handelSubmit} type="button" defaultValue="Submit" />

        <br />
      </form>
    </div>
  );
}

export default MainPage;
