function WorkshopDetails() {
  const details = [
    {
      icon: "👦",
      title: "Age Group",
      value: "8–14 Years",
    },
    {
      icon: "📅",
      title: "Duration",
      value: "4 Weeks",
    },
    {
      icon: "💻",
      title: "Mode",
      value: "Online",
    },
    {
      icon: "💰",
      title: "Fee",
      value: "₹2,999",
    },
    {
      icon: "🚀",
      title: "Start Date",
      value: "15 July 2026",
    },
  ];

  return (
    <section
      id="details"
      className="py-20 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-gray-900">
          Workshop Details
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14 text-lg">
          Everything you need to know before enrolling.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {details.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="text-4xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-blue-600 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-700 text-lg">
                {item.value}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WorkshopDetails;