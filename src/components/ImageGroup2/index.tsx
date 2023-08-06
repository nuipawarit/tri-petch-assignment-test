import React from "react";
import styled from "styled-components";

import basketball from "../../assets/basketball.png";
import path452 from "../../assets/path45-2.svg";
import path453 from "../../assets/path45-3.svg";
import rectangle342 from "../../assets/rectangle34-2.svg";
import rectangle34 from "../../assets/rectangle34.svg";

export default styled((props: { className?: string }) => (
  <div className={props.className}>
    <img alt="basketball" src={basketball} />
    <img alt="path452" src={path452} />
    <img alt="path453" src={path453} />
    <img alt="rectangle34" src={rectangle34} />
    <img alt="rectangle342" src={rectangle342} />
    <img alt="rectangle342-2" src={rectangle342} />
  </div>
))`
  position: relative;
  width: 18.875rem;
  height: 15.5625rem;
  z-index: 1;

  > img {
    position: absolute;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  }

  > img[alt="basketball"] {
    top: 0.06rem;
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    z-index: 2;
  }

  > img[alt="path452"] {
    top: 6.87rem;
    bottom: 1.06rem;
    left: 3.06rem;
    right: 9.17rem;
  }

  > img[alt="path453"] {
    top: 1.52rem;
    bottom: 8.49rem;
    left: 12.3rem;
    right: 1.78rem;
  }

  > img[alt="rectangle34"] {
    top: 0;
    bottom: 14.7rem;
    left: 3.06rem;
    right: 14.9rem;
  }

  > img[alt="rectangle342"] {
    top: 0.56rem;
    bottom: 14.1rem;
    left: 4.44rem;
    right: 13.5rem;
  }

  > img[alt="rectangle342-2"] {
    top: 9.38rem;
    bottom: 5.31rem;
    left: 16.6rem;
    right: 1.31rem;
  }
`;
