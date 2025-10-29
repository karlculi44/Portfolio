import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

export default function InquiriesForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo only)\n\n" + message);
    setMessage("");
  };

  return (
    <section
      id="inquiries"
      className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 md:py-16 px-4 md:px-8"
    >
      <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl w-full mx-auto transition-all duration-500 hover:shadow-2xl">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
          Have any inquiries, questions, or concerns?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
          Feel free to send me a message about app-related or personal matters.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <textarea
            className="w-full p-5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            rows={8} // increased height
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
    </section>
  );
}
