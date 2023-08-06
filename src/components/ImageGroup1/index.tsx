import React from "react";
import styled from "styled-components";

import footballer from "../../assets/footballer.png";
import path45 from "../../assets/path45.svg";
import rectangle342 from "../../assets/rectangle34-2.svg";
import rectangle34 from "../../assets/rectangle34.svg";

export default styled((props: { className?: string }) => (
  <div className={props.className}>
    <img alt="footballer" src={footballer} />
    <img alt="path45" src={path45} />
    <img alt="rectangle34" src={rectangle34} />
    <img alt="rectangle342" src={rectangle342} />
  </div>
))`
  position: relative;
  width: 13.625rem;
  max-width: 100vw;
  height: 17.5625rem;
  z-index: 1;

  > img {
    position: absolute;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  }

  > img[alt="footballer"] {
    top: 0;
    bottom: 0;
    left: 1.13rem;
    right: 0;
    z-index: 2;
  }

  > img[alt="path45"] {
    top: 0.81rem;
    bottom: 4.43rem;
    left: 1.02rem;
    right: 1.42rem;
  }

  > img[alt="rectangle34"] {
    top: 0.69rem;
    bottom: 15.9rem;
    left: 0;
    right: 12.7rem;
  }

  > img[alt="rectangle342"] {
    top: 1.25rem;
    bottom: 15.4rem;
    left: 1.38rem;
    right: 11.3rem;
  }
`;
