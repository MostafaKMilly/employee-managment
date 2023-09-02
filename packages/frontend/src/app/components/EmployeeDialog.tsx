"use client";
import React, { useState, FC } from "react";
import { Department } from "@/types/department.types";
import Dialog from "./Dialog";

interface Props {
  onSave: (data: {
    employeeName: string;
    employeeSurname: string;
    departmentId: string;
  }) => void;
  departments: Department[];
}

const EmployeeDialog: FC<Props> = ({ onSave, departments }) => {
  const [employeeName, setEmployeeName] = useState("");
  const [employeeSurname, setEmployeeSurname] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setEmployeeName("");
    setEmployeeSurname("");
    setDepartmentId("");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Employee
      </button>
      <Dialog title="Add Employee" isOpen={isOpen} onClose={handleClose}>
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-black flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <h1 className="text-xl">Add Employee</h1>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="employeeName"
                >
                  Employee Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="employeeName"
                  type="text"
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="employeeSurname"
                >
                  Surname
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="employeeSurname"
                  type="text"
                  value={employeeSurname}
                  onChange={(e) => setEmployeeSurname(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="department"
                >
                  Department
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={departmentId}
                  onChange={(e) => setDepartmentId(e.target.value)}
                >
                  <option value="" disabled>
                    Select Department
                  </option>
                  {departments.map((dept) => (
                    <option key={dept._id} value={dept._id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>
            </form>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <button onClick={handleClose}>Close</button>
              <button
                onClick={() => {
                  onSave({ employeeName, employeeSurname, departmentId });
                  handleClose();
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default EmployeeDialog;
