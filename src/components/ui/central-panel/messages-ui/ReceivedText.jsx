import React from "react";

function ReceivedText() {
  return (
    <>
      <div className="flex flex-col items-start ml-2">
        <div className="flex flex-col items-end">
          <div className="bg-gray-300 p-2 rounded-lg max-w-md text-justify">
            <p className="text-sm">
              Hello, how are you? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vel eveniet blanditiis repellat, possimus
              pariatur modi fuga, cupiditate repellendus error molestiae
              similique odio fugiat. Quae voluptas voluptatem, voluptatum cum
              amet maxime repellendus corporis, quas porro, necessitatibus
              beatae saepe eligendi repudiandae! Libero nulla ipsam quaerat
              exercitationem magnam dolore nobis, est pariatur aliquam provident
              consectetur consequatur ratione reiciendis. Debitis?
            </p>
          </div>
          <p className="text-xs text-gray-500">12:30</p>
        </div>
      </div>
    </>
  );
}

export default ReceivedText;
