import React from "react";

const Modal = ({
  show,
  handleClose,
  handleSave,
  newMemberName,
  setNewMemberName,
}) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Add New Member</h2>
        <input
          type="text"
          placeholder="New Member Name"
          value={newMemberName}
          onChange={(e) => setNewMemberName(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleClose}>Close</button>
      </div>
      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        }
        .modal input {
          margin-bottom: 10px;
          padding: 5px;
        }
        .modal button {
          margin: 5px;
        }
      `}</style>
    </div>
  );
};

export default Modal;
