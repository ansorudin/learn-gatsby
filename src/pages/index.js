import React, { useState } from "react";
import "../styles/global.css";
import MovingText from "react-moving-text";

// markup
const IndexPage = () => {
  const [isMaksing, setIsMasking] = useState(true);
  const [isHover, setIsHover] = useState(false);

  const letters = ["PL", "AY"];

  return (
    <main>
      <title>Test yah </title>
      <div class="wrapper">
        <video
          className={isMaksing ? "masking" : "no-masking"}
          autoPlay={true}
          playsInline
          mute={false}
          loop
          poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
        >
          <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
        </video>
        <div className="absolute top-0 text-white w-full h-full flex justify-center items-center ">
          <div
            className="w-full flex justify-center items-center h-32 border"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {isHover ? (
              <MovingText
                type="fadeInFromBottom"
                duration="800ms"
                delay="index * 100ms"
                direction="normal"
                timing="ease-in-out"
                iteration="1"
                fillMode="both"
              >
                <p
                  onClick={() => setIsMasking(!isMaksing)}
                  className="text-6xl font-medium cursor-pointer"
                >
                  PLAY
                </p>
              </MovingText>
            ) : (
              <MovingText
                type={"fadeOutToTop"}
                duration="800ms"
                delay="index * 100ms"
                direction="normal"
                timing="ease-in-out"
                iteration="1"
                fillMode="both"
              >
                <p className="text-6xl font-thin cursor-pointer">
                  We Are Partners of Extra Mile Walkers
                </p>
              </MovingText>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
