"use client";
import React, { useState } from "react";
import Dialog from "./Dialog";

const DepartmentDialog = ({ onSave }: { onSave: (data: string) => void }) => {
  const [departmentName, setDepartmentName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
    setDepartmentName("");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Department
      </button>
      <Dialog title="Add Department" isOpen={isOpen} onClose={onClose}>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="departmentName"
            >
              Department Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="departmentName"
              type="text"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
            />
          </div>
        </form>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button onClick={onClose}>Close</button>
          <button
            onClick={() => {
              onSave(departmentName);
              onClose();
            }}
          >
            Save
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default DepartmentDialog;
