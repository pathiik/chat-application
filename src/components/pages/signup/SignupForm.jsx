import React, { useState } from "react";
import InputBox from "../ui/InputBox";
import Button from "../ui/Button";
import {
  faAt,
  faCheckDouble,
  faEnvelope,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Checkbox from "../ui/Checkbox";

function SignupForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  const passwordMatch = password === confirmPassword;

  const handleSignup = () => {
    if (!passwordMatch) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  return (
    <>
      <div className="w-1/2 p-4 flex flex-col justify-between items-center">
        <div className="bg-white rounded-md shadow-lg flex flex-col p-5 gap-3 justify-between">
          <p className="text-3xl text-center font-bold mb-2">Signup</p>
          <InputBox
            iconName={faUser}
            inputType="text"
            placeholderText="Enter your name..."
          />
          <InputBox
            iconName={faEnvelope}
            inputType="email"
            placeholderText="Enter your email..."
          />
          <InputBox
            iconName={faAt}
            inputType="text"
            placeholderText="Enter your username..."
          />
          <InputBox
            iconName={faLock}
            inputType="password"
            placeholderText="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputBox
            iconName={faCheckDouble}
            inputType="password"
            placeholderText="Confirm your password..."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Checkbox
            text="I agree to the terms and conditions"
            isChecked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
          />
          {error ? (
            <p className="text-red-500">Passwords do not match</p>
          ) : (
            <Button
              buttonText="Signup"
              handleClick={handleSignup}
              disabled={!isChecked || !passwordMatch}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default SignupForm;
