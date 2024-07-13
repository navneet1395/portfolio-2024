import React from "react";

const CustomNode = ({ nodeDatum, addMember }) => (
  <g>
    <circle r={10} fill="#3498db" stroke="#2980b9"></circle>
    <text
      fill="BLACK"
      x="70"
      y="10"
      fontSize="14"
      fontWeight="lighter"
      textAnchor="middle"
    >
      {nodeDatum.name}
    </text>
    <rect
      x=" 20"
      y="20"
      width="100"
      height="20"
      rx="5"
      ry="5"
      fill="#ecf0f1"
      stroke="#bdc3c7"
      strokeWidth="1"
      onClick={() => addMember(nodeDatum.name)}
      style={{ cursor: "pointer" }}
    />
    <text
      x="70"
      y="35"
      fill="#3498db"
      fontSize="12"
      fontWeight={"lighter"}
      textAnchor="middle"
      pointerEvents="none"
    >
      Add Member +
    </text>
  </g>
);

export default CustomNode;
