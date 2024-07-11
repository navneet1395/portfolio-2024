import React, { useEffect, useState } from "react";

const Shape = ({ box }) => {
  const [boxState, setBoxState] = useState(
    Array(box.length * box[0].length).fill(0)
  );
  const [count, setCount] = useState(0);
  const oneBoxSum = box.flat().reduce((a, b) => a + b, 0);

  const Remove = (cout) => {
    if (cout < 1) return;
    const newBoxState = boxState;
    const index = newBoxState.indexOf(cout);
    if (index !== -1) {
      newBoxState[index] = 0;
      setBoxState(newBoxState);
      setCount(cout - 1);
      if (cout < oneBoxSum) setTimeout(() => Remove(cout + 1), 500);
      else setCount(0);
    }
  };
  console.log(boxState);
  useEffect(() => {
    if (count + 1 > oneBoxSum) {
      setTimeout(() => Remove(1), 100);
    }
  }, [count, oneBoxSum]);

  return (
    <div>
      <h1>Shape Game</h1>
      <div
        className={`grid grid-cols-${box[0].length} gap-2`}
        style={{ width: "fit-content" ,}}
      >
        {box.map((bo, boIndex) =>
          bo.map((b, bIndex) => (
            <div
              onClick={() => {
                if (b !== 0) {
                  const index = boIndex * box[0].length + bIndex;
                  if (boxState[index] > 0) return;
                  const newBoxState = [...boxState];
                  newBoxState[index] = 1 + count;
                  setCount(count + 1);
                  setBoxState(newBoxState);
                }
              }}
              className={` transition ease-in-out delay-150
                ${
                  boxState[boIndex * box[0].length + bIndex] > 0 &&
                  "bg-green-500"
                }
                ${
                  b !== 0 && "border-2"
                } dark:border-white aspect-square w-20 h-20 flex items-center justify-center`}
              key={`${boIndex}-${bIndex}`}
            ></div>
          ))
        )}
      </div>
    </div>
  );
};

export default Shape;
