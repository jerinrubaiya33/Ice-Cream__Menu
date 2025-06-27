import React, { useState, useRef, useEffect } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants"; // Make sure this is a lightweight .mp4 or from CDN
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const vidRef = useRef(null);

  useEffect(() => {
    if (videoReady && vidRef.current) {
      if (playVideo) {
        vidRef.current.play().catch(() => {});
      } else {
        vidRef.current.pause();
      }
    }
  }, [playVideo, videoReady]);

  const handleVideo = () => {
    setPlayVideo((prev) => !prev);
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        muted
        preload="metadata" // Avoids loading entire video up front
        playsInline // Ensures it plays on mobile without fullscreen
        controls={false}
        onCanPlayThrough={() => {
          setVideoReady(true);
          if (playVideo && vidRef.current) {
            vidRef.current.play().catch(() => {});
          }
        }}
      />

      {videoReady && (
        <div className="app__video-overlay flex__center">
          <div
            className="app__video-overlay_circle flex__center"
            onClick={handleVideo}
          >
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
