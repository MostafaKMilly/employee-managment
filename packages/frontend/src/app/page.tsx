import { revalidateTag } from "next/cache";
import { addEmployee, loadDepartments, loadEmployees } from "../api";
import EmployeeDialog from "./components/EmployeeDialog";

export default async function Employees() {
  const employees = await loadEmployees();
  const departments = await loadDepartments();

  const createEmployee = async (data: {
    employeeName: string;
    employeeSurname: string;
    departmentId: string;
  }) => {
    "use server";
    const { departmentId, employeeName, employeeSurname } = data;
    console.log(departmentId, employeeName, employeeSurname);
    if (departmentId && employeeName && employeeSurname) {
      await addEmployee({
        department: departmentId,
        name: employeeName,
        surname: employeeSurname,
      });
      revalidateTag("employees");
    }
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">Employees</h1>
        <EmployeeDialog onSave={createEmployee} departments={departments} />
        <ul>
          {employees?.map((e) => (
            <li key={e._id}>
              {e.name} {e.surname} - Department:
              {e.department?.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
