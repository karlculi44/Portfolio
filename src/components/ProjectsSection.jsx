import { Hammer } from "lucide-react";

export default function ProjectsSection() {
  return (
    <>
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 md:px-16 py-20 text-center"
      >
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            My Projects
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Works are in progress — exciting things are coming soon! 🛠️
          </p>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 border border-gray-300 rounded-2xl shadow-md hover:shadow-lg hover:shadow-gray-400/30 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Placeholder Image */}
                <div className="bg-gray-300 w-full h-48 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-lg animate-pulse" />
                </div>

                {/* Card Content */}
                <div className="flex-1 flex flex-col items-center justify-center p-8">
                  <Hammer className="w-10 h-10 text-gray-500 mb-4 animate-bounce-slow" />
                  <h3 className="text-xl font-semibold text-gray-700">
                    Coming Soon
                  </h3>
                  <p className="text-gray-500 mt-2 text-sm">
                    This project is under development.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-10 w-3/4 mx-auto border-t border-gray-400 shadow-sm shadow-gray-500/20 rounded-full" />
    </>
  );
}
