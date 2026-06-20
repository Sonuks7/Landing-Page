function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <h1 className="text-3xl font-extrabold text-blue-600">
            Kidrove
          </h1>

          {/* Menu */}

          <ul className="hidden md:flex items-center gap-10 font-semibold text-gray-700">

            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#details" className="hover:text-blue-600 transition">
                Workshop
              </a>
            </li>

            <li>
              <a href="#outcomes" className="hover:text-blue-600 transition">
                Outcomes
              </a>
            </li>

            <li>
              <a href="#faq" className="hover:text-blue-600 transition">
                FAQ
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-blue-600 transition">
                Contact
              </a>
            </li>

          </ul>

          {/* Button */}

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition">
            Enroll Now
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;