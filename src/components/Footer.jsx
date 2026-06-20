function Footer() {
  return (
    <footer
      id="contact"
      className="bg-slate-900 text-white py-14"
    >
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-3xl font-bold">
              Kidrove
            </h2>

            <p className="mt-4 text-gray-400">
              Inspiring young innovators through AI,
              Robotics and Coding.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Workshop
            </h3>

            <p className="text-gray-400">AI & Robotics</p>

            <p className="text-gray-400">4 Weeks</p>

            <p className="text-gray-400">Online</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              kidrove@gmail.com
            </p>

            <p className="text-gray-400">
              +91 9XXXXXXXXX
            </p>
          </div>

        </div>

        <hr className="my-10 border-slate-700" />

        <p className="text-center text-gray-500">
          © 2026 Kidrove. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;