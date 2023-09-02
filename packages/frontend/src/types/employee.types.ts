export interface Employee {
  _id: string;
  name: string;
  surname: string;
  department: {
    _id: string;
    name: string;
  };
}

export interface AddEmployeeRequest {
  name: string;
  surname: string;
  department: string;
}
