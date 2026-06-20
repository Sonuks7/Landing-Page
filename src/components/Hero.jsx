function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white min-h-[75vh] flex items-center">
      <div className="container mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="max-w-xl">

            <span className="inline-block bg-white text-blue-700 px-5 py-2 rounded-full font-semibold shadow-lg">
              🚀 Summer Workshop 2026
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mt-8">
              AI & Robotics
              <br />
              Summer Workshop
            </h1>

            <p className="mt-6 text-lg text-blue-100 leading-8">
              Unlock your child's creativity through Artificial Intelligence,
              Robotics and Coding. Learn by building exciting real-world
              projects with expert mentors.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-white text-blue-700 px-7 py-3 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300">
                Enroll Now
              </button>

              <button className="border-2 border-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 hover:shadow-xl transition duration-300">
                Learn More
              </button>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

              <div className="bg-white/15 backdrop-blur-xl rounded-3xl shadow-xl p-5 text-center">
                <div className="text-4xl">👦</div>
                <h3 className="font-bold mt-2">Age</h3>
                <p className="text-sm">8–14 Years</p>
              </div>

              <div className="bg-white/15 backdrop-blur-xl rounded-3xl shadow-xl p-5 text-center">
                <div className="text-4xl">💻</div>
                <h3 className="font-bold mt-2">Mode</h3>
                <p className="text-sm">Online</p>
              </div>

              <div className="bg-white/15 backdrop-blur-xl rounded-3xl shadow-xl p-5 text-center">
                <div className="text-4xl">📅</div>
                <h3 className="font-bold mt-2">Duration</h3>
                <p className="text-sm">4 Weeks</p>
              </div>

              <div className="bg-white/15 backdrop-blur-xl rounded-3xl shadow-xl p-5 text-center">
                <div className="text-4xl">🏆</div>
                <h3 className="font-bold mt-2">Certificate</h3>
                <p className="text-sm">Included</p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
              alt="AI Workshop"
              className="w-full max-w-lg h-[380px] object-cover rounded-3xl shadow-2xl border-2 border-white/20"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;