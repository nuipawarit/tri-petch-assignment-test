import React, { useState } from "react";
import { Box } from "./style";

type CarouselProp = {
  name: string;
  items: React.ReactNode[];
};

const Carousel = ({ name, items }: CarouselProp) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewportScroll = ({
    currentTarget,
  }: React.UIEvent<HTMLUListElement, UIEvent>) => {
    const scrollLeft = currentTarget.scrollLeft;
    const itemWidth = currentTarget.offsetWidth;

    setActiveIndex(Math.round(scrollLeft / itemWidth));
  };

  return (
    <Box className="carousel">
      <ul className="viewport" onScroll={onViewportScroll}>
        {items.map((item, index) => (
          <li
            key={index}
            id={`${name}-slide-${index + 1}`}
            tabIndex={0}
            className="slide"
          >
            {item}
            <div className="snapper"></div>
          </li>
        ))}
      </ul>
      <ul className="navigation-list">
        {items.map((_, index) => (
          <li key={index} className="navigation-item">
            <a
              href={`#${name}-slide-${index + 1}`}
              className={`navigation-button  ${
                activeIndex === index ? "active" : ""
              }`}
            >
              Go to slide {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Carousel;
