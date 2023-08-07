import styled from "styled-components";

import footballer from "../../assets/footballer.png";
import background6 from "../../assets/background6.svg";
import background4 from "../../assets/background4.svg";

export default styled.div`
  display: block;
  aspect-ratio: 13.625 / 17.5625;
  background-image: url(${footballer}), url(${background6});
  background-size: contain, contain;
  background-position:
    1.13rem 0,
    0 0;
  background-repeat: no-repeat, no-repeat;

  @media (min-width: 768px) {
    aspect-ratio: 31.125 / 44.875;
    background-image: url(${footballer}), url(${background4});
    background-position:
      0 1.19rem,
      10.06rem 0;
  }

  @media (min-width: 1440px) {
    aspect-ratio: 42.375 / 59.375;
    background-image: url(${footballer});
    background-position: 0 0;
  }
`;
