import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10 text-center">
      {/* Desktop Layout */}
      <div className="hidden sm:block">
        <h2 className="text-black bg-gray-200 rounded-2xl w-32 pl-1.5 mb-6 ml-196">
          Get in touch
        </h2>
        <p className="text-gray-600 mb-6">
          What's next? Feel free to reach out to me if you're looking for <br />{" "}
          a developer, have a query, or simply want to connect.
        </p>
        <div className="space-y-2 mb-4">
          <a
            href="mailto:reachsagarshah@gmail.com"
            className="flex items-center justify-center gap-2 text-gray-800 hover:text-gray-600"
          >
            <FaEnvelope /> reachsagarshah@gmail.com
          </a>
          <a
            href="tel:+918980500565"
            className="flex items-center justify-center gap-2 text-gray-800 hover:text-gray-600"
          >
            <FaPhone /> +91 8980500565
          </a>
        </div>
        <p className="text-gray-600">
          You may also find me on these platforms!
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="text-gray-800 hover:text-gray-600">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            <FaGithub />
          </a>
        </div>
        <p className="mt-8 text-gray-600">
          2023 | Designed and coded with ❤️ by Sagar Shah
        </p>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden text-center">
        <h2 className="text-black bg-gray-200 rounded-2xl w-32 pl-1.5 mb-6 mx-auto">
          Get in touch
        </h2>
        <p className="text-gray-600 mb-6">
          What's next? Feel free to reach out <br /> to me if you're looking for
          a <br />
          developer, have a query, or simply <br /> want to connect.
        </p>
        <div className="space-y-2 mb-4">
          <a
            href="mailto:reachsagarshah@gmail.com"
            className="flex items-center justify-center gap-2 text-gray-800 hover:text-gray-600"
          >
            <FaEnvelope /> reachsagarshah@gmail.com
          </a>
          <a
            href="tel:+918980500565"
            className="flex items-center justify-center gap-2 text-gray-800 hover:text-gray-600"
          >
            <FaPhone /> +91 8980500565
          </a>
        </div>
        <p className="text-gray-600">
          You may also find me on these platforms!
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="text-gray-800 hover:text-gray-600">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            <FaGithub />
          </a>
        </div>
        <p className="mt-8 text-gray-600">
          2023 | Designed and coded with ❤️ by Sagar Shah
        </p>
      </div>
    </div>
  );
};

export default Footer;
