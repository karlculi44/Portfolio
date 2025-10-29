import { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
} from "react-icons/fa";

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
      platform: "Gmail",
      icon: <FaEnvelope className="text-red-500 w-5 h-5" />,
      text: "kaimax187@gmail.com",
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

  const handleSubmit = () => {
    // Opens Gmail with prefilled subject & body
    const mailtoLink = `mailto:kaimax187@gmail.com?subject=Portfolio Inquiry&body=${encodeURIComponent(
      message
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 py-20 px-6"
    >
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-12">
          Contact Me
        </h2>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contacts.map((contact, idx) => (
            <div
              key={idx}
              className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-6 flex items-center gap-4 transition-all duration-500 transform ${
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
                  <span className="text-left text-gray-700 dark:text-gray-200 font-medium hover:underline">
                    {contact.platform}
                  </span>
                </a>
              ) : (
                <div className="flex items-center gap-4 w-full">
                  <span className="transition-transform duration-300 hover:scale-125">
                    {contact.icon}
                  </span>
                  <span className="text-left text-gray-700 dark:text-gray-200 font-medium">
                    {contact.text}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md max-w-xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Have any inquiries, questions, or concerns? Send me a message!
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <textarea
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              rows={6}
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-400/40 transition-all duration-300"
            >
              Send Message
              <FaEnvelope className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-10 w-3/4 mx-auto border-t border-gray-300 shadow-sm shadow-gray-500/20 rounded-full" />
    </section>
  );
}
