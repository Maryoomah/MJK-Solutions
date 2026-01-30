import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-green-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">MJK Solutions</Link>
        </h1>

        <ul className="hidden md:flex gap-6">
          <li>
            <Link to="/" className="hover:text-green-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-300">About</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-green-300">Services</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-green-300">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-300">Contact</Link>
          </li>
        </ul>

        <div className="md:hidden text-2xl cursor-pointer">☰</div>
      </div>
    </nav>
  );
}

export default Navbar;
