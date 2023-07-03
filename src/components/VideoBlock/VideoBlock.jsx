import React, { useRef, useState } from "react";
import { VideoContainer, Video } from "./styled-components";
import videoFile from "../../assets/videos/gendalf.mp4";

const VideoBlock = () => {
  const [isFullWidth, setIsFullWidth] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    setIsFullWidth(!isFullWidth);
  };

  return (
    <VideoContainer onClick={handleClick} isFullWidth={isFullWidth}>
      <Video ref={videoRef} autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
      </Video>
    </VideoContainer>
  );
};

export default VideoBlock;


