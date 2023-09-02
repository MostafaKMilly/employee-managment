"use client";
import React, { useState, FC } from "react";

interface Props {
  onSave: (data: {
    employeeName: string;
    employeeSurname: string;
    departmentId: string;
  }) => void;
  departments: { name: string; id: string }[];
}

const EmployeeDialog: FC<Props> = ({ onSave, departments }) => {
  const [employeeName, setEmployeeName] = useState<string>("");
  const [employeeSurname, setEmployeeSurname] = useState<string>("");
  const [departmentId, setDepartmentId] = useState<string>("");
  const [isOpen, setIsOpne] = useState(false);

  const onClose = () => setIsOpne(false);

  return (
    <>
      <button
        onClick={() => setIsOpne(false)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Employee
      </button>
      {isOpen && (
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
                  htmlFor="employeePosition"
                >
                  Position
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="employeePosition"
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
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>
            </form>
            <button onClick={onClose}>Close</button>
            <button
              onClick={() => {
                onSave({ employeeName, employeeSurname, departmentId });
                onClose();
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EmployeeDialog;
