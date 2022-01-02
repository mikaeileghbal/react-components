import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ totalStars = 5 }) {
  const [selectStars, setSelectStars] = useState(3);

  return (
    <>
      {createArray(totalStars).map((item, i) => (
        <Star
          key={i}
          selected={i < selectStars}
          onSelect={() => setSelectStars(i + 1)}
        />
      ))}
      <p>
        {selectStars} of {totalStars}
      </p>
    </>
  );
}

const Star = ({ selected = false, onSelect }) => {
  return <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />;
};

const createArray = (length) => {
  return [...Array(length)];
};
