import styled from "styled-components";

export const Box = styled.div`
  background-color: #f5f4f9;

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .viewport {
    margin: 0;
    padding: 0;
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
  }

  .viewport {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
  }

  .viewport::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  .slide {
    position: relative;
    flex: 0 0 100%;
    width: 100%;
  }

  //.slide:nth-child(even) {
  //  background-color: #99f;
  //}

  .snapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    scroll-snap-align: center;
  }

  .navigation-list {
    list-style: none;
    display: inline-flex;
    width: 100%;
    justify-content: center;
    padding: 0;
    margin-bottom: 1.88rem;
    gap: 0.6875rem;
    vertical-align: top;
  }

  .navigation-item {
    display: flex;
    margin: 0;
  }

  .navigation-button {
    display: inline-block;
    width: 0.625rem;
    height: 0.625rem;
    background-color: #d8d8d8;
    background-clip: content-box;
    border-radius: 50%;
    font-size: 0;
    transition: transform 0.1s;
  }

  .navigation-button.active {
    background-color: #5c3caf;
  }
`;
