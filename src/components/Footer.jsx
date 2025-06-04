import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-center dark:bg-black">
      {/* Desktop Layout */}
      <div className="hidden sm:block">
        <h2 className="text-black dark:text-white bg-gray-200 dark:bg-gray-700 rounded-2xl w-32 pl-1.5 mb-6 lg:ml-198 mt-10">
          Get in touch
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          What's next? Feel free to reach out to me if you're looking for <br />
          a developer, have a query, or simply want to connect.
        </p>
        <div className="mb-4 space-y-2">
          <a
            href="mailto:reachsagarshah@gmail.com"
            className="flex items-center justify-center gap-2 text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaEnvelope /> reachsagarshah@gmail.com
          </a>
          <a
            href="tel:+918980500565"
            className="flex items-center justify-center gap-2 text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaPhone /> +91 8980500565
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          You may also find me on these platforms!
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="#"
            className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="text-center sm:hidden">
        <h2 className="text-black dark:text-white bg-gray-200 dark:bg-gray-700 rounded-2xl w-32 pl-1.5 mb-6 mx-auto">
          Get in touch
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          What's next? Feel free to reach out <br /> to me if you're looking for
          a <br />
          developer, have a query, or simply <br /> want to connect.
        </p>
        <div className="mb-4 space-y-2 text-4xl">
          <a
            href="mailto:reachsagarshah@gmail.com"
            className="flex items-center justify-center gap-2 text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaEnvelope /> reachsagarshah@gmail.com
          </a>
          <a
            href="tel:+918980500565"
            className="flex items-center justify-center gap-2 text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaPhone /> +91 8980500565
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          You may also find me on these platforms!
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="#"
            className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="bg-gray-900">
        <p className="mt-8 text-gray-600 dark:text-gray-300">
          2023 | Designed and coded with ❤️ by Sagar Shah
        </p>
      </div>
    </div>
  );
};

export default Footer;
