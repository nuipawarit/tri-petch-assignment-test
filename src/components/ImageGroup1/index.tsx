import styled from "styled-components";

import footballer from "../../assets/footballer.png";
import background6 from "../../assets/background6.svg";

export default styled.div`
  display: block;
  aspect-ratio: 13.625 / 17.5625;
  background-image: url(${footballer}), url(${background6});
  background-size: contain, contain;
  background-position:
    1.13rem 0,
    top left;
  background-repeat: no-repeat, no-repeat;
`;
