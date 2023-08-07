import styled from "styled-components";

import basketball from "../../assets/basketball.png";
import background3 from "../../assets/background3.svg";
import background5 from "../../assets/background5.svg";
import background7 from "../../assets/background7.svg";

export default styled.div`
  display: block;
  aspect-ratio: 18.875 / 15.5625;
  background-image: url(${basketball}), url(${background7});
  background-size: contain, contain;
  background-position:
    0 0.06rem,
    0 0;
  background-repeat: no-repeat, no-repeat;

  @media (min-width: 768px) {
    aspect-ratio: 43.7875 / 35.5;
    background-image: url(${basketball}), url(${background5});
    background-size: contain, contain;
    background-position:
      0 0,
      0 0;
  }

  @media (min-width: 1440px) {
    aspect-ratio: 61.9375 / 50.9375;
    background-image: url(${basketball}), url(${background3});
    background-size: contain, contain;
    background-position:
            0 0,
            0 0;
  }
`;
