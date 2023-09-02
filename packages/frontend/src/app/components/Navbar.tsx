export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/departments">Departments</a>
        </li>
        <li>
          <a href="/">Employees</a>
        </li>
      </ul>
    </nav>
  );
}
