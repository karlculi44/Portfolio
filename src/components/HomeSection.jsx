import { Link } from "react-scroll";
import { Download } from "lucide-react";
import { Info } from "lucide-react";

export default function HomeSection() {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center  px-4 md:px-8 mt-11 "
      >
        {/* Card Container */}
        <div className=" rounded-2xl  shadow-lg max-w-6xl w-full flex flex-col md:flex-row items-center justify-between p-8 md:p-12 md:gap-5 gap-10">
          {/* Left: Profile Picture */}
          <div className="flex justify-center  w-full md:w-1/2">
            <img
              src="/src/assets/profile-picture.jpg"
              alt="Karl Zamora Culi"
              className="rounded-full w-80 h-100 object-cover shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right: Intro Text */}
          <div className="w-full md:w-1/2 text-center md:text-left ">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Karl Zamora Culi
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
              Full Stack Developer | Crafting seamless web experiences with
              modern technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/resume.pdf"
                download="Karl-Zamora-Culi-Resume.pdf"
                className="group inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-400/40 transition-all duration-300"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                <span className="relative">
                  Download Resume
                  <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-1px bg-white transition-all duration-300"></span>
                </span>
              </a>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="group inline-flex items-center gap-2 bg-white text-blue-600 font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:shadow-blue-200/40 hover:bg-blue-50 transition-all duration-300 cursor-pointer"
              >
                <Info className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                <span className="relative">
                  Know More About Me
                  <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-px bg-blue-600 transition-all duration-300"></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Divider */}
      <hr className="my-10 w-3/4 mx-auto border-t border-gray-300 shadow-sm shadow-gray-500/20 rounded-full" />
    </>
  );
}
