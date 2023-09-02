import { addDepartment, loadDepartments } from "@/api";
import DepartmentDialog from "../components/DepartmentDialog";
import { revalidateTag } from "next/cache";

export default async function Departments() {
  const departments = await loadDepartments();

  const createDepartment = async (name: string) => {
    "use server";
    if (name) {
      await addDepartment({ name });
      revalidateTag("departments");
    }
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">Departments</h1>
        <DepartmentDialog onSave={createDepartment} />
        <ul>
          {departments.map((d) => (
            <li key={d._id}>{d.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
