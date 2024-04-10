import { useState } from "react";

const YouTubeThumbnailName = () => {
  const [textInput, setTextInput] = useState("");

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value.slice(0, 100));
  };
  return (
    <div className="font-roboto">
      <div className="flex max-w-[350px] flex-wrap">
        <div className="h-full">
          <div className="h-10 w-10 rounded-full bg-[#535353]  mt-3"></div>
        </div>
        <textarea
          value={textInput}
          onChange={handleTextInputChange}
          rows={2}
          className="mt-2 px-2 py-1 w-[300px] max-h-[4.4rem] overflow-hidden leading-[25px] overflow-y-none bg-transparent font-medium white resize-none text-white text-base  "
          placeholder="Thumbnail Name"
          maxLength={140}
        />

        <div className=" ml-12 font-norma text-sm text-[#9e9e9e]">
          <div>Channel Name</div>
          <div>100k views • 10 min ago</div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeThumbnailName;
