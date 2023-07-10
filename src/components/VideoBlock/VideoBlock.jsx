import React, { useRef, useState } from "react";
import gsap from "gsap";
import { VideoContainer, Video } from "./styled-components";
import videoFile from "../../assets/videos/gendalf.mp4";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const VideoBlock = () => {
  const containerRef = React.useRef();
  const videoRef = React.useRef();
  const topRef = React.useRef();
  const bottomRef = React.useRef();

  React.useEffect(() => {
    setTimeout(() => {
      let tl = gsap.timeline({});

      // add animations and labels to the timeline
      tl.addLabel("start").fromTo(
        videoRef.current,
        {
          scale: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            markers: true,
          },
        },
        { scale: 2 }
      );
    }, 1000);
  }, []);

  return (
    <>
      <VideoContainer ref={containerRef} id="containerRef">
        <div
          ref={topRef}
          id="topLine"
          style={{
            display: "block",
            content: "",
            height: "1rem",
            width: "100%",
          }}
        />
        <Video ref={videoRef} autoPlay loop muted id="videoRef">
          <source src={videoFile} type="video/mp4" />
        </Video>
        <div
          ref={bottomRef}
          id="bottomLine"
          style={{
            display: "block",
            content: "",
            height: "1rem",
            width: "100%",
          }}
        />
      </VideoContainer>

      <div
        ref={bottomRef}
        id="bottomLine"
        style={{
          display: "block",
          content: "",
          height: "5rem",
          width: "100%",
          background: "red",
        }}
      />
    </>
  );
};

export default VideoBlock;
