import React from "react";

const CustomNode = ({ nodeDatum, addMember }) => (
  <g>
    <circle r={15}></circle>
    <text fill="black" x="20">
      {nodeDatum.name}
    </text>
    <text
      fill="blue"
      x="20"
      y="20"
      style={{ cursor: "pointer" }}
      onClick={() => addMember(nodeDatum.name)}
    >
      +
    </text>
  </g>
);

export default CustomNode;
