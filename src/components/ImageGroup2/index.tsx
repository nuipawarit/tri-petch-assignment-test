import styled from "styled-components";

import basketball from "../../assets/basketball.png";
import background7 from "../../assets/background7.svg";

export default styled.div`
  display: block;
  aspect-ratio: 18.875 / 15.5625;
  background-image: url(${basketball}), url(${background7});
  background-size: contain, contain;
  background-position:
    0 0.06rem,
    top left;
  background-repeat: no-repeat, no-repeat;
`;
