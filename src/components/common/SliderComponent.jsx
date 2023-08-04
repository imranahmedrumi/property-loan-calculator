import React from "react";
import Slider from "@mui/material/Slider";

const SliderComponent = ({ defaultValue, min, max, step }) => {
  return (
    <Slider
      defaultValue={defaultValue}
      min={min}
      max={max}
      aria-label="Default"
      valueLabelDisplay="auto"
      step={step}
    />
  );
};

export default SliderComponent;
