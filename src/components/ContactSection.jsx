import { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaYoutube,
  FaTwitter,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-scroll";

export default function ContactsSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  const contacts = [
    {
      platform: "Facebook",
      icon: <FaFacebookF className="text-blue-600 w-5 h-5" />,
      link: "https://www.facebook.com/karl.culi",
    },
    {
      platform: "Instagram",
      icon: <FaInstagram className="text-pink-500 w-5 h-5" />,
      link: "https://www.instagram.com/yourusername",
    },
    {
      platform: "GitHub",
      icon: <FaGithub className="text-gray-800 w-5 h-5" />,
      link: "https://github.com/karlculi44",
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedinIn className="text-blue-700 w-5 h-5" />,
      link: "https://www.linkedin.com/in/karl-culi-131826328/",
    },
    {
      platform: "YouTube",
      icon: <FaYoutube className="text-red-600 w-5 h-5" />,
      link: "https://www.youtube.com/@yourchannel",
    },
    {
      platform: "Twitter",
      icon: <FaTwitter className="text-blue-400 w-5 h-5" />,
      link: "https://twitter.com/yourusername",
    },
    {
      platform: "Gmail",
      icon: <FaEnvelope className="text-red-500 w-5 h-5" />,
      link: "mailto:kaimax187@gmail.com",
    },

    {
      platform: "Phone",
      icon: <FaPhoneAlt className="text-green-600 w-5 h-5" />,
      text: "+63 953 301 9178",
    },
    {
      platform: "Address",
      icon: <FaHome className="text-gray-700 w-5 h-5" />,
      text: "Bayawan City, Negros Oriental, Philippines",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo only)\n\n" + message);
    setMessage("");
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 md:px-12 py-10"
    >
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-10">
          Contact Me
        </h2>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {contacts.map((contact, idx) => (
            <div
              key={idx}
              className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-5 flex items-center gap-4 transition-all duration-500 transform ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } hover:-translate-y-1 hover:shadow-xl`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {contact.link ? (
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full group"
                >
                  <span className="transition-transform duration-300 group-hover:scale-125">
                    {contact.icon}
                  </span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium hover:underline">
                    {contact.platform}
                  </span>
                </a>
              ) : (
                <div className="flex items-center gap-4 w-full">
                  <span className="transition-transform duration-300 hover:scale-125">
                    {contact.icon}
                  </span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium text-left">
                    {contact.text}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="w-3/4 mx-auto border-t border-gray-300 shadow-sm shadow-gray-500/20 rounded-full mt-4" />

      {/* Question Button */}
      <div className="flex justify-center mt-6 mb-10">
        <Link
          to="inquiries" // 👈 change this to the id of your inquiry section
          smooth={true}
          duration={500}
          offset={-70}
          className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-700 transition duration-300 cursor-pointer"
        >
          <FaQuestionCircle className="w-4 h-4" />
          <span>Question?</span>
        </Link>
      </div>
    </section>
  );
}
