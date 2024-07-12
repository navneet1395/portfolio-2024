"use client";
import React, { useState, useEffect } from "react";
import Tree from "react-d3-tree";
import CustomNode from "./familyCustomNode";
import Modal from "./familyMemberModal";

const FamilyTree = () => {
  const [treeData, setTreeData] = useState(null);
  const [newMemberName, setNewMemberName] = useState("");
  const [parentName, setParentName] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("/family-lineage/api/get", { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => setTreeData(formatTreeData(data.data)))
      .catch((error) => console.error("Error fetching tree data:", error));
  }, []);

  const formatTreeData = (data) => {
    const map = {};
    data.forEach((node) => {
      map[node.id] = { ...node, children: [] };
    });

    const tree = [];
    data.forEach((node) => {
      if (node.parent_id) {
        map[node.parent_id].children.push(map[node.id]);
      } else {
        tree.push(map[node.id]);
      }
    });

    return tree;
  };

  const addFamilyMember = async () => {
    try {
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
        setTreeData(formatTreeData(result.data));
        setNewMemberName("");
        setParentName("");
        setShowModal(false);
      } else {
        console.error("Error updating tree:", result.error);
      }
    } catch (error) {
      console.error("Error adding family member:", error);
    }
  };

  const handleAddMemberClick = (parentName) => {
    setParentName(parentName);
    setShowModal(true);
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
      <Modal
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
