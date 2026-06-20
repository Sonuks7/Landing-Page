import { useState } from "react";

function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.phone) {
    alert("Please fill all fields");
    return;
  }

  try {
    setLoading(true);

    const response = await fetch("http://localhost:5000/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    alert(data.message);

    setForm({
      name: "",
      email: "",
      phone: "",
    });

  } catch (error) {
    console.log(error);
    alert("Server Error");
  }

  setLoading(false);
};
  return (
    <section
      id="register"
      className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-5xl font-bold text-gray-900">
              Register Today
            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-8">
              Join India's most exciting AI & Robotics Summer Workshop
              designed specially for children aged 8–14 years.
            </p>

            <div className="space-y-5 mt-10">

              <p>✅ Live Interactive Classes</p>

              <p>🤖 Hands-on Robotics Projects</p>

              <p>💻 Coding from Scratch</p>

              <p>🏆 Certificate Included</p>

            </div>

          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl p-10"
          >

            <h3 className="text-3xl font-bold mb-8">
              Enroll Now
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mb-5"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mb-5"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 mb-8"
            />

            <button
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition"
            >
              {loading ? "Submitting..." : "Register Now"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default RegistrationForm;