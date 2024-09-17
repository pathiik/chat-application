import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faPaperclip,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";

function NewMessageTab() {
  const [isShowEmoji, setIsShowEmoji] = useState(false);
  const [onTextChange, setOnTextChange] = useState("");

  const handleEmojiClick = (e) => {
    setOnTextChange((prev) => prev + e.emoji);
    setIsShowEmoji(false);
  };

  return (
    <>
      <div className="bg-gray-100 flex items-center gap-4 p-2 max-h-max">
        <div className="relative">
          <div className="text-2xl cursor-pointer">
            <FontAwesomeIcon
              className="text-2xl text-gray-500 hover:text-green-500"
              icon={faFaceSmile}
              onClick={() => setIsShowEmoji((prev) => !prev)}
              title="Choose an emoji"
            />
          </div>
          <div
            className={`${isShowEmoji ? "block" : "hidden"} absolute bottom-14`}
          >
            <EmojiPicker open={isShowEmoji} onEmojiClick={handleEmojiClick} />
          </div>
        </div>
        <div className="w-full">
          <input
            className="px-2 py-1 outline-none w-full rounded h-10"
            type="text"
            placeholder="Type a message"
            onChange={(e) => setOnTextChange(e.target.value)}
            value={onTextChange}
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faPaperclip}
            className="cursor-pointer text-2xl text-gray-500 hover:text-green-500"
            title="Attach file"
          />
        </div>
        <div>
          <button>
            <FontAwesomeIcon
              icon={faSquareArrowUpRight}
              className="ml-1 text-3xl text-green-500 hover:text-green-600"
              title="Send Message"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default NewMessageTab;
