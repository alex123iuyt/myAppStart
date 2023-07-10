import React, { useState } from "react";

import { useSwipeable } from "react-swipeable";

// import {} from "./styled-component";
//
import dataSlider from "./dataSlider";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === "left" && currentIndex < dataSlider.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === "right" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });

  return (
    <div {...handlers}>
      <h2>{dataSlider[currentIndex].title}</h2>
      <p>{dataSlider[currentIndex].description}</p>
      <img src={dataSlider[currentIndex].logo} alt="Логотип" />
    </div>
  );
};

export default Slider;
