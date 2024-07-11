"use client";
import React, { useState, useEffect } from "react";
import Tree from "react-d3-tree";
import CustomNode from "./familyCustomNode";
import FamilyMemberAddModal from "./familyMemberModal"; // Import the modal

const FamilyTree = () => {
  const [treeData, setTreeData] = useState(null);
  const [newMemberName, setNewMemberName] = useState("");
  const [parentName, setParentName] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("family-lineage/api/get")
      .then((response) => response.json())
      .then((data) => setTreeData(data.data));
  }, []);

  const addFamilyMember = async () => {
    if (newMemberName == "") {
      alert("Enter Valid Name");
    } else {
      const response = await fetch("/family-lineage/api/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parentName,
          newMember: { name: newMemberName },
        }),
      });
      const result = await response.json();
      if (result.success) {
        setTreeData(result.data);
        setNewMemberName("");
        setParentName("");
        setShowModal(false); // Close modal after adding
      }
    }
  };

  const handleAddMemberClick = (parentName) => {
    setParentName(parentName);
    setShowModal(true); // Show modal when "+" is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewMemberName("");
  };

  if (!treeData) return <div>Loading...</div>;

  return (
    <div
      id="treeWrapper"
      style={{
        width: "100%",
        height: "80vh",
        paddingTop: "10vh",
        margin: "auto",
      }}
    >
      <Tree
        data={treeData}
        orientation="vertical"
        enableLegacyTransitions
        renderCustomNodeElement={(rd3tProps) =>
          React.createElement(CustomNode, {
            ...rd3tProps,
            addMember: handleAddMemberClick,
          })
        }
      />
      <FamilyMemberAddModal
        show={showModal}
        handleClose={handleCloseModal}
        handleSave={addFamilyMember}
        newMemberName={newMemberName}
        setNewMemberName={setNewMemberName}
      />
    </div>
  );
};

export default FamilyTree;
