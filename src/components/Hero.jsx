import React from "react";
import { FiMapPin, FiGithub, FiTwitter } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";

const Hero = () => {
  const socialLinks = {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    figma: "https://figma.com/@yourusername",
  };

  return (
    <div className="mx-auto px-4 py-20 max-w-6xl flex">
      {/* Desktop Layout */}
      <div className="flex-1 pr-10 hidden md:block">
        <div className="flex flex-col space-y-6">
          <div className="animate-waving-hand">
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Hi, I'm Sagar{" "}
              <span className="inline-block animate-waving">👋</span>
            </h1>
          </div>

          <div className="mt-2">
            <p className="text-lg lg:text-[15px] md:text-xl text-gray-500 leading-relaxed w-220">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>

          {/* Блок местоположения и статуса */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <FiMapPin className="text-gray-500" />
              <span className="text-gray-500">Ahmedabad, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-gray-500">Available for new projects</span>
            </div>
          </div>

          {/* Иконки соцсетей */}
          <div className="flex space-x-4 mt-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-purple-500 transition-colors"
              aria-label="Figma"
            >
              <FaFigma className="w-5 h-5" />
            </a>
          </div>
          {/* Аватар */}
          <div className="w-80 h-80 flex-shrink-0 -mt-80 ml-240">
            <img
              src="/src/assets/portfolio.png"
              alt="Sagar's avatar"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Секция About me (Desktop) */}
        <div className="mt-16">
          <h2 className="text-black bg-gray-200 rounded-2xl mb-4 w-20 pl-1.5 ml-100">
            About me
          </h2>
          {/* Аватар */}
          <div className="w-80 h-80 flex-shrink-0">
            <img
              src="src\assets\photo.png"
              alt="Sagar's avatar"
              className="w-full h-128 object-cover rounded-lg shadow-lg"
            />
          </div>
          <p className="text-black mb-6 ml-120 -mt-80 text-[26px] font-bold">
            Curious about me? Here you have it:
          </p>

          <div className="space-y-4 text-gray-500 leading-relaxed ml-120 text-[15px]">
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack <br /> development (React.js & Node.js). I am very
              enthusiastic about bringing the <br /> technical and visual
              aspects of digital products to life. User experience, pixel <br />{" "}
              perfect design, and writing clear, readable, highly performant
              code matters <br /> to me.
            </p>

            <p>
              I began my journey as a web developer in 2015, and since then,
              I've <br /> continued to grow and evolve as a developer, taking on
              new challenges and <br /> learning the latest technologies along
              the way. Now, in my thirties, 7 years <br /> after starting my web
              development journey, I'm building cutting-edge web <br />{" "}
              applications using modern technologies such as Next.js,
              TypeScript, Nest.js, <br /> Tailwindcss, Supabase and much more.
            </p>

            <p>
              I am very much a progressive thinker and enjoy working on products
              end to <br /> end, from ideation all the way to development.
            </p>

            <p>
              When I'm not in full-on developer mode, you can find me hovering
              around on <br /> twitter or on indie hacker, witnessing the
              journey of early startups or <br /> enjoying some free time. You
              can follow me on Twitter where I share tech- <br /> related bites
              and build in public, or you can follow me on GitHub.
            </p>

            <p>Finally, some quick bits about me.</p>

            <ul className="list-disc pl-5 space-y-2">
              <li>B.E. In Computer Engineering</li>
              <li className="-mt-8 ml-75">Avid learner</li>
              <li>Full time freelancer</li>
              <li className="-mt-8 ml-75">Aspiring indie hacker</li>
            </ul>

            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and <br /> say hello! I promise I don't bite 😊
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center">
        {/* Аватар */}
        <div className="w-64 h-64 mb-6">
          <img
            src="/src/assets/portfolio.png"
            alt="Sagar's avatar"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Текстовая часть */}
        <div className="flex flex-col space-y-6 text-center">
          <div className="animate-waving-hand">
            <h1 className="text-4xl font-bold text-black">
              Hi, I'm Sagar{" "}
              <span className="inline-block animate-waving">👋</span>
            </h1>
          </div>

          <div className="mt-2">
            <p className="text-lg text-gray-500 leading-relaxed">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>

          {/* Блок местоположения и статуса */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <FiMapPin className="text-gray-500" />
              <span className="text-gray-500">Ahmedabad, India</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-gray-500">Available for new projects</span>
            </div>
          </div>

          {/* Иконки соцсетей */}
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-purple-500 transition-colors"
              aria-label="Figma"
            >
              <FaFigma className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Секция About me (Mobile) */}
        <div className="mt-16 text-center">
          <h2 className="text-black bg-gray-200 rounded-2xl mb-4 w-20 pl-1.5 mx-auto">
            About me
          </h2>
          {/* Аватар */}
          <div className="w-64 h-96 mb-6">
            <img
              src="src\assets\photo.png"
              alt="Sagar's avatar"
              className="w-full h-full object-cover rounded-lg shadow-lg ml-40"
            />
          </div>
          <p className="text-black mb-6 text-[26px] font-bold">
            Curious about me? Here you have it:
          </p>

          <div className="space-y-4 text-gray-500 leading-relaxed text-[15px]">
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>

            <p>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my thirties, 7 years after starting my web development
              journey, I'm building cutting-edge web applications using modern
              technologies such as Next.js, TypeScript, Nest.js, Tailwindcss,
              Supabase and much more.
            </p>

            <p>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>

            <p>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>

            <p>Finally, some quick bits about me.</p>

            <ul className="list-disc pl-5 space-y-2 mx-auto">
              <li>B.E. In Computer Engineering</li>
              <li className="ml-0">Avid learner</li>
              <li>Full time freelancer</li>
              <li className="ml-0">Aspiring indie hacker</li>
            </ul>

            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
