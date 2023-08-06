import React from 'react';
import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <>
      <SliderComponent
        label="Home Value"
        min={0}
        max={50}
        defaultValue={20}
        step={5}
        onChange={(e, value) => console.log(value)}
        unit="$"
        amount={3000}
      />
      <SliderComponent
        label="Down Payment"
        min={0}
        max={50}
        defaultValue={20}
        step={5}
        onChange={(e, value) => console.log(value)}
        unit="$"
        amount={500}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={50}
        defaultValue={20}
        step={5}
        onChange={(e, value) => console.log(value)}
        unit="$"
        amount={700}
      />

    </>
  );
};

export default SliderSelect;