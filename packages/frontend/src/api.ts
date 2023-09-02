import { AddDepartmentRequest, Department } from "./types/department.types";
import { AddEmployeeRequest, Employee } from "./types/employee.types";

const api = (endpoint: string, requestInit?: RequestInit) =>
  fetch("http://localhost:3001/api" + endpoint, requestInit);

export const loadEmployees = async (): Promise<Employee[]> => {
  const res = await api("/employees", {
    next: {
      tags: ["employees"],
    },
  });
  return await res.json();
};

export const loadDepartments = async (): Promise<Department[]> => {
  const res = await api("/departments", {
    next: {
      tags: ["departments"],
    },
  });
  return await res.json();
};

export const addDepartment = async (
  data: AddDepartmentRequest
): Promise<Department> => {
  const res = await api("/department", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const addEmployee = async (
  data: AddEmployeeRequest
): Promise<Employee> => {
  const res = await api("/employee", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export default api;
