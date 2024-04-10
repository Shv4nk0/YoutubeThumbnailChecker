import { useState } from "react";
import YouTubeThumbnail from "./YouTubeThumbnail";
import YouTubeThumbnailName from "./YouTubeThumbnailName";

const YouTubeButton = () => {
  return (
    <div className="cursor-pointer">
      <YouTubeThumbnail />
      <YouTubeThumbnailName />
    </div>
  );
};

export default YouTubeButton;
