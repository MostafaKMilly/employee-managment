export interface Employee {
  id: string;
  name: string;
  surname: string;
  department: string;
}

export interface AddEmployeeRequest {
  name: string;
  surname: string;
  department: string;
}
