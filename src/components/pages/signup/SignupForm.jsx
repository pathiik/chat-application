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
import { auth, db } from "../../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../../firebase/upload";

function SignupForm({ isChecked, setIsChecked, profilePictureFile }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const passwordMatch = password === confirmPassword;

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { name, email, username, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      let profilePictureUrl = "";

      if (profilePictureFile) {
        profilePictureUrl = await upload(profilePictureFile, "profilePictures");
      }

      await setDoc(doc(db, "users", res.user.uid), {
        name,
        username,
        email,
        profilePictureUrl,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userChats", res.user.uid), {
        chats: [],
      });
    } catch (error) {
      console.error(error);
    } finally {
      e.target.reset();
      setPassword("");
      setConfirmPassword("");
      setLoading(false);
      window.location.reload();
    }

    if (!passwordMatch) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  return (
    <>
      <div className="w-1/3 p-4 flex flex-col justify-between items-center">
        <div className="bg-white rounded-md shadow-lg">
          <p className="text-3xl text-center font-bold mt-3">Signup</p>
          <form
            className="flex flex-col p-5 gap-3 justify-between"
            onSubmit={handleSignup}
          >
            <InputBox
              iconName={faUser}
              name="name"
              inputType="text"
              placeholderText="Enter your name..."
            />
            <InputBox
              iconName={faEnvelope}
              name="email"
              inputType="email"
              placeholderText="Enter your email..."
            />
            <InputBox
              iconName={faAt}
              name="username"
              inputType="text"
              placeholderText="Enter your username..."
            />
            <InputBox
              iconName={faLock}
              inputType="password"
              name="password"
              placeholderText="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputBox
              iconName={faCheckDouble}
              inputType="password"
              name="confirmPassword"
              placeholderText="Confirm your password..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Checkbox
              text="I agree to the terms and conditions"
              isChecked={isChecked}
              disabled={password === "" || confirmPassword === ""}
              onChange={() => setIsChecked((prev) => !prev)}
            />
            {error ? (
              <p className="text-red-500">Passwords do not match</p>
            ) : (
              <Button
                buttonText={loading ? "Loading..." : "Signup"}
                disabled={!isChecked || !passwordMatch || loading}
              />
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupForm;
