import React, { useState } from "react";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function CurrentUserSharedFiles() {
  const [isRecentFiles, setIsRecentFiles] = useState(true);

  const maxFileNameLength = 20;

  const truncateFileName = (fileName) => {
    return fileName.length > maxFileNameLength
      ? `${fileName.substring(0, maxFileNameLength)}...`
      : fileName;
  };

  return (
    <>
      <div className="my-1">
        <p className="text-center mb-1">
          {isRecentFiles ? "Recent Files" : "All Files"}
        </p>
        <div
          className={`flex flex-col gap-1 h-44 ${
            isRecentFiles
              ? "overflow-hidden"
              : "overflow-y-scroll overflow-x-hidden"
          }`}
        >
          <div className="flex items-center justify-between gap-1 p-1">
            <div className="flex items-center justify-start gap-1">
              <div className="bg-gray-600 rounded-full h-12 w-12 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faFile}
                  className="text-2xl text-white"
                />
              </div>
              <p className="text-sm">{truncateFileName("file_name.docx")}</p>
            </div>
            <FontAwesomeIcon
              icon={faDownload}
              className="text-md cursor-pointer hover:text-green-500 text-gray-500  mr-1"
              title="Download"
            />
          </div>
          <div className="flex items-center justify-between gap-1 p-1">
            <div className="flex items-center justify-start gap-1">
              <div className="bg-gray-600 rounded-full h-12 w-12 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faFile}
                  className="text-2xl text-white"
                />
              </div>
              <p className="text-sm">{truncateFileName("file_name.docx")}</p>
            </div>
            <FontAwesomeIcon
              icon={faDownload}
              className="text-md cursor-pointer hover:text-green-500 text-gray-500  mr-1"
              title="Download"
            />
          </div>
          <div className="flex items-center justify-between gap-1 p-1">
            <div className="flex items-center justify-start gap-1">
              <div className="bg-gray-600 rounded-full h-12 w-12 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faFile}
                  className="text-2xl text-white"
                />
              </div>
              <p className="text-sm">{truncateFileName("file_name.docx")}</p>
            </div>
            <FontAwesomeIcon
              icon={faDownload}
              className="text-md cursor-pointer hover:text-green-500 text-gray-500  mr-1"
              title="Download"
            />
          </div>
          <div className="flex items-center justify-between gap-1 p-1">
            <div className="flex items-center justify-start gap-1">
              <div className="bg-gray-600 rounded-full h-12 w-12 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faFile}
                  className="text-2xl text-white"
                />
              </div>
              <p className="text-sm">{truncateFileName("file_name.docx")}</p>
            </div>
            <FontAwesomeIcon
              icon={faDownload}
              className="text-md cursor-pointer hover:text-green-500 text-gray-500  mr-1"
              title="Download"
            />
          </div>
          <div className="flex items-center justify-between gap-1 p-1">
            <div className="flex items-center justify-start gap-1">
              <div className="bg-gray-600 rounded-full h-12 w-12 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faFile}
                  className="text-2xl text-white"
                />
              </div>
              <p className="text-sm">
                {truncateFileName("hello_world-3356684.docx")}
              </p>
            </div>
            <FontAwesomeIcon
              icon={faDownload}
              className="text-md cursor-pointer hover:text-green-500 text-gray-500 mr-1"
              title="Download"
            />
          </div>
        </div>
        <p
          className="text-xs text-right mr-1 cursor-pointer hover:text-green-500"
          onClick={() => setIsRecentFiles((prev) => !prev)}
        >
          {isRecentFiles ? "View All" : "View Recent"}
        </p>
      </div>
    </>
  );
}

export default CurrentUserSharedFiles;
