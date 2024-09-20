import React, { useState } from "react";
import InputBox from "../ui/InputBox";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

function UserDetails({ isChecked, setProfilePictureFile }) {
  const [profilePicture, setProfilePicture] = useState(null);
  const [bio, setBio] = useState("");

  const handleProfilePictureChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
      setProfilePictureFile(file);
    }
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  return (
    <>
      {isChecked ? (
        <div className="p-4 w-1/3 flex flex-col items-center justify-center">
          <div className="flex flex-col p-5 w-max items-center bg-white justify-center gap-4 rounded-md">
            <p className="text-3xl font-bold">Profile</p>
            <div className="flex flex-col items-center">
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover mb-2"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center mb-2">
                  <p className="text-gray-500">No Image</p>
                </div>
              )}
              <div className="flex flex-col justify-center items-center gap-2">
                <label
                  htmlFor="profilePicture"
                  className="cursor-pointer text-sm hover:text-green-500 underline"
                >
                  Add Profile Picture
                </label>
                <input
                  type="file"
                  id="profilePicture"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                  className=" w-52 rounded hidden"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <label htmlFor="bio" className="font-bold">
                Add a bio
              </label>
              <InputBox
                iconName={faInfo}
                inputType="text"
                value={bio}
                onChange={handleBioChange}
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default UserDetails;
