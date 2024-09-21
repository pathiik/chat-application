import React, { useState } from "react";
import InputBox from "../ui/InputBox";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/Button";
import { auth } from "../../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPanel() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    } finally {
      e.target.reset();
      setLoading(false);
    }
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
            <Button
              buttonText={loading ? "Loading..." : "Login"}
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPanel;
