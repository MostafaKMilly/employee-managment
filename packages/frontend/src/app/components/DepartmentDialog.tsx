"use client";
import React, { useState } from "react";

const DepartmentDialog = ({ onSave }: { onSave: (data: string) => void }) => {
  const [departmentName, setDepartmentName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Department
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-black flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <h1 className="text-xl">Add Department</h1>
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
              {/* Add more form elements here if needed */}
            </form>
            <button onClick={onClose}>Close</button>
            <button onClick={() => onSave(departmentName)}>Save</button>
          </div>
        </div>
      )}
    </>
  );
};

export default DepartmentDialog;
