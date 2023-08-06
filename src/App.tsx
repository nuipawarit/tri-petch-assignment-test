import React from "react";

import "./App.css";
import Carousel from "./components/Carousel";
import ImageGroup1 from "./components/ImageGroup1";
import ImageGroup2 from "./components/ImageGroup2";

function App() {
  const content = {
    section1: [
      {
        number: "01",
        title: "CONNECTION",
        description:
          "Connect with coaches directly, you can ping coaches to view profile.",
      },
      {
        number: "02",
        title: "COLLABORATION",
        description:
          "Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
      },
      {
        number: "03",
        title: "GROWTH",
        description:
          "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc",
      },
    ],
    section2: [
      {
        number: "01",
        title: "CONNECTION",
        description:
          "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
      },
      {
        number: "02",
        title: "COLLABORATION",
        description:
          "Work with recruiter to increase your chances of finding talented athlete.",
      },
      {
        number: "03",
        title: "GROWTH",
        description: "Save your time, recruit proper athlets for your team.",
      },
    ],
  };

  return (
    <div className="container">
      <div className="section-1">
        <h1 className="header-1">ATHLETS</h1>
        <ImageGroup1 className="image-1" />
      </div>
      <Carousel
        name="athlet"
        items={content.section1.map(({ number, title, description }) => (
          <div className="section-2">
            <h3 className="header-2">
              <span className="number">{number}</span> {title}
            </h3>
            <p className="description-1">{description}</p>
          </div>
        ))}
      />
      <div className="section-3">
        <h1 className="header-1">PLAYERS</h1>
        <ImageGroup2 className="image-2" />
      </div>
      <Carousel
        name="player"
        items={content.section2.map(({ number, title, description }) => (
          <div className="section-4">
            <h3 className="header-2">
              <span className="number">{number}</span> {title}
            </h3>
            <p className="description-2">{description}</p>
          </div>
        ))}
      />
    </div>
  );
}

export default App;
