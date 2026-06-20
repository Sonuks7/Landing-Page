function LearningOutcomes() {
  const outcomes = [
    {
      icon: "🤖",
      title: "AI Fundamentals",
      description:
        "Learn the basics of Artificial Intelligence with fun activities and real-world examples.",
    },
    {
      icon: "🦾",
      title: "Robotics Projects",
      description:
        "Build exciting robotics projects using beginner-friendly kits and guidance.",
    },
    {
      icon: "💻",
      title: "Coding Skills",
      description:
        "Develop programming skills through games, projects and interactive coding.",
    },
    {
      icon: "🧠",
      title: "Problem Solving",
      description:
        "Improve logical thinking and analytical skills with engaging challenges.",
    },
    {
      icon: "🎨",
      title: "Creative Thinking",
      description:
        "Create innovative AI ideas and robotics solutions while having fun.",
    },
    {
      icon: "🏆",
      title: "Certificate",
      description:
        "Receive an industry-recognized certificate after successfully completing the workshop.",
    },
  ];

  return (
    <section
      id="outcomes"
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-gray-900">
            Learning Outcomes
          </h2>

          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            By the end of this workshop, students will have practical knowledge
            of AI, Robotics and Coding through interactive projects and
            hands-on learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {outcomes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-4xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7 flex-grow">
                {item.description}
              </p>

              <button className="mt-6 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default LearningOutcomes;