import React, { useState } from "react";
import SignupForm from "./SignupForm";
import UserDetails from "./UserDetails";

function SignupPanel({ setIsNewUser }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center">
        <SignupForm isChecked={isChecked} setIsChecked={setIsChecked} />
        <UserDetails isChecked={isChecked} />
      </div>
      <p className="mt-1 text-center">
        Already have an account?{" "}
        <span
          className="text-blue-500 hover:text-blue-600 cursor-pointer"
          onClick={() => setIsNewUser(false)}
        >
          Login here
        </span>
      </p>
    </>
  );
}

export default SignupPanel;
