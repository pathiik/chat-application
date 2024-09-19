import React from "react";
import InputBox from "../ui/InputBox";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/Button";

function LoginPanel() {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="w-1/2 p-4 flex flex-col justify-between items-center">
        <div className="bg-white rounded-md shadow-lg flex flex-col p-5 gap-3 justify-between">
          <p className="text-3xl text-center font-bold mb-2">Login</p>
          <form onSubmit={handleLogin}>
            <InputBox
              iconName={faEnvelope}
              inputType="email"
              name="email"
              placeholderText="Email Address..."
            />
            <InputBox
              iconName={faLock}
              inputType="password"
              name="password"
              placeholderText="Password..."
            />
            <Button buttonText="Login" />
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPanel;
