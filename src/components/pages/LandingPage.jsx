import React, { useState } from "react";
import LoginPanel from "./login/LoginPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import Button from "./ui/Button";
import SignupPanel from "./signup/SignupPanel";

function LandingPage() {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <>
      <div className="p-2 h-screen bg-gradient-to-r from-green-500">
        <div className="flex flex-col justify-center items-center mb-3">
          <img
            className="w-24 h-24 rounded-full"
            src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            alt="ChatMap Logo"
          />
          <h1 className="font-bold text-5xl">ChatMap</h1>
        </div>
        {isNewUser ? (
          <SignupPanel />
        ) : (
          <div className="w-full flex justify-between items-center">
            <LoginPanel />
            <div className="w-1/2 flex flex-col items-center justify-center gap-3">
              <div className="w-60 text-center flex justify-between items-center">
                <h1 className="text-7xl font-bold">New User</h1>
                <p>
                  <FontAwesomeIcon className="text-9xl" icon={faQuestion} />
                </p>
              </div>
              <p className="text-2xl">Signup now</p>
              <Button
                buttonText="Create an account"
                handleClick={() => setIsNewUser(true)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default LandingPage;
