import { Link } from "react-scroll";
import { FolderGit2 } from "lucide-react";

export default function AboutSection() {
  return (
    <>
      <section
        id="about"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-gray-100 py-20"
      >
        {/* Left: About Text */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0 pr-0 md:pr-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Me
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-6">
            Hi, I’m Karl Zamora Culi — a web developer who loves creating clean,
            responsive, and functional websites. I enjoy bringing ideas to life
            through modern tools like React and JavaScript.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-10">
            I’m currently learning full-stack development with the MERN stack
            and always looking for ways to improve and grow. Outside of coding,
            I like working out, exploring tech, and staying consistent with my
            goals.
          </p>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="group inline-flex items-center gap-2 bg-gray-800 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg hover:shadow-gray-700/30 transition-all duration-300 cursor-pointer"
          >
            <FolderGit2 className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
            <span className="relative">
              View My Projects
              <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-px bg-white transition-all duration-300"></span>
            </span>
          </Link>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center w-full md:w-1/2 md:border-l md:border-gray-300 md:pl-10">
          <img
            src="/src/assets/Profile-picture.jpg"
            alt="About Karl Zamora Culi"
            className="rounded-2xl w-96 h-96 object-cover shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* Divider */}
      <hr className="my-10 w-3/4 mx-auto border-t border-gray-400 shadow-sm shadow-gray-500/20 rounded-full" />
    </>
  );
}
