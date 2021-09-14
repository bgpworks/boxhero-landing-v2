import React from "react";
import { DotGroup, Dot } from "pure-react-carousel";
import PropTypes from "prop-types";

function renderDots(
  allData, className, selectedClassName, { currentSlide, totalSlides, visibleSlides },
) {
  const dots = [];
  for (let i = 0; i < totalSlides; i += 1) {
    const multipleSelected = i >= currentSlide && i < currentSlide + visibleSlides;
    const selected = multipleSelected;
    const slide = i >= totalSlides - visibleSlides ? totalSlides - visibleSlides : i;
    dots.push(
      <Dot
        key={i}
        slide={slide}
        selected={selected}
        className={`${className} ${
          selected ? selectedClassName : ""
        }`}
      >
        {allData[slide].icon && (
          <img
            src={allData[slide].icon}
            alt={allData[slide].title}
          />
        )}
        {allData[slide].title}
      </Dot>,
    );
  }
  return dots;
}

function CustomDotGroup({
  className, data, dotClassName, dotSelectedClassName,
}) {
  return (
    <DotGroup
      className={className}
      renderDots={(props) => renderDots(data, dotClassName, dotSelectedClassName, props)}
    />
  );
}

CustomDotGroup.propTypes = {
  className: PropTypes.string,
};

CustomDotGroup.defaultProps = {
  className: "",
};

export default CustomDotGroup;
