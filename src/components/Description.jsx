import { FaEdit } from "react-icons/fa";

const Description = () => {
  return (
    <div className="dark:bg-black">
      {/* Work Section Header */}
      <div>
        <div className="max-w-4xl px-4 pt-12 mx-auto">
          <h2 className="inline-block px-4 py-1 mb-6 text-lg font-medium text-black bg-gray-200 lg:ml-100 rounded-2xl dark:bg-gray-700 dark:text-white">
            Work
          </h2>
          <p className="text-gray-600 dark:text-gray-300 lg:ml-60">
            Some of the noteworthy projects I have built:
          </p>
        </div>

        {/* Projects Container */}
        <div className="max-w-4xl px-4 pb-12 mx-auto mt-5">
          {/* Project 1 - Desktop */}
          <div className="hidden pb-8 mb-16 border-b border-gray-200 md:flex dark:border-gray-700 dark:bg-gray-900">
            <div className="flex-1 mr-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                Fiskil
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Next.js",
                  "Typescript",
                  "Nest.js",
                  "PostgreSQL",
                  "Tailwindcss",
                  "Figma",
                  "Cypress",
                  "Storybook",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                <FaEdit className="w-4 h-4" />
              </button>
            </div>
            <div className="w-1/2">
              <img
                src="src/assets/photo 2.png"
                alt="Fiskil Project"
                className="object-cover w-full h-64 rounded-lg"
              />
            </div>
          </div>

          {/* Project 1 - Mobile */}
          <div className="flex flex-col pb-8 mb-16 border-b border-gray-200 md:hidden dark:border-gray-700">
            <img
              src="src/assets/photo 2.png"
              alt="Fiskil Project"
              className="object-cover w-full mb-6 rounded-lg h-80"
            />
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                Fiskil
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Next.js",
                  "Typescript",
                  "Nest.js",
                  "PostgreSQL",
                  "Tailwindcss",
                  "Figma",
                  "Cypress",
                  "Storybook",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                <FaEdit className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Project 2 - Desktop (Reversed) */}
          <div className="flex-row-reverse hidden pb-8 mb-16 border-b border-gray-200 md:flex dark:border-gray-700 dark:bg-gray-900">
            <div className="flex-1 ml-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                Fiskil
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Next.js",
                  "Typescript",
                  "Nest.js",
                  "PostgreSQL",
                  "Tailwindcss",
                  "Figma",
                  "Cypress",
                  "Storybook",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                <FaEdit className="w-4 h-4" />
              </button>
            </div>
            <div className="w-1/2">
              <img
                src="src/assets/photo 2.png"
                alt="Fiskil Project"
                className="object-cover w-full h-64 rounded-lg"
              />
            </div>
          </div>

          {/* Project 2 - Mobile */}
          <div className="flex flex-col pb-8 mb-16 border-b border-gray-200 md:hidden dark:border-gray-700">
            <img
              src="src/assets/photo 2.png"
              alt="Fiskil Project"
              className="object-cover w-full mb-6 rounded-lg h-80"
            />
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                Fiskil
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Next.js",
                  "Typescript",
                  "Nest.js",
                  "PostgreSQL",
                  "Tailwindcss",
                  "Figma",
                  "Cypress",
                  "Storybook",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                <FaEdit className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Project 3 - Desktop */}
          <div className="hidden pb-8 mb-16 md:flex dark:bg-gray-900">
            <div className="flex-1 mr-8 ">
              <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                Fiskil
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Consectetur ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Next.js",
                  "Typescript",
                  "Nest.js",
                  "PostgreSQL",
                  "Tailwindcss",
                  "Figma",
                  "Cypress",
                  "Storybook",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                <FaEdit className="w-4 h-4" />
              </button>
            </div>
            <div className="w-1/2">
              <img
                src="src/assets/photo 2.png"
                alt="Fiskil Project"
                className="object-cover w-full h-64 rounded-lg"
              />
            </div>
          </div>

          {/* Project 3 - Mobile */}
          <div className="flex flex-col pb-8 mb-16 md:hidden">
            <img
              src="src/assets/photo 2.png"
              alt="Fiskil Project"
              className="object-cover w-full mb-6 rounded-lg h-80"
            />
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                Fiskil
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Consectetur ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Next.js",
                  "Typescript",
                  "Nest.js",
                  "PostgreSQL",
                  "Tailwindcss",
                  "Figma",
                  "Cypress",
                  "Storybook",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                <FaEdit className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="px-4 pb-12 mx-auto bg-white dark:bg-gray-900">
          <h2 className="inline-block px-4 py-1 mb-6 text-lg font-medium text-black bg-gray-200 rounded-2xl dark:bg-gray-700 dark:text-white lg:ml-194 lg:mt-10">
            Testimonials
          </h2>
          <p className="mb-12 text-gray-600 dark:text-gray-300 lg:ml-170">
            Nice things people have said about me:
          </p>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-3 lg:ml-25">
            {/* Testimonial 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 lg:w-100 lg:h-100 lg:pt-20">
              <img
                src="src/assets/default-avatar.jpg"
                alt="Profile 1"
                className="w-10 h-10 mx-auto mb-4 rounded-full"
              />
              <p className="mb-4 italic text-gray-600 dark:text-gray-300">
                "Job well done! I am really impressed. He is very very good at
                what he does; I would recommend Sagar and will rehire in the
                future for Frontend development."
              </p>
              <div className="flex items-center justify-center">
                <div>
                  <p className="font-semibold text-center dark:text-white">
                    John Doe
                  </p>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    Founder - xyz.com
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 lg:w-100 lg:h-100 lg:pt-20">
              <img
                src="src/assets/default-avatar.jpg"
                alt="Profile 2"
                className="w-10 h-10 mx-auto mb-4 rounded-full"
              />
              <p className="mb-4 italic text-gray-600 dark:text-gray-300">
                "Great guy, highly recommended for any COMPLEX front-end
                development job! His skills are top-notch and he will be an
                amazing addition to any team."
              </p>
              <div className="flex items-center justify-center">
                <div>
                  <p className="font-semibold text-center dark:text-white">
                    John Doe
                  </p>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    Founder - abc.com
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 lg:w-100 lg:h-100 lg:pt-20">
              <img
                src="src/assets/default-avatar.jpg"
                alt="Profile 3"
                className="w-10 h-10 mx-auto mb-4 rounded-full"
              />
              <p className="mb-4 italic text-gray-600 dark:text-gray-300">
                "Sagar was extremely easy and pleasant to work with and he truly
                cares about the project being a success. Sagar has a high level
                of knowledge and was able to work on my MERN stack application
                without any issues."
              </p>
              <div className="flex items-center justify-center">
                <div>
                  <p className="font-semibold text-center dark:text-white">
                    John Doe
                  </p>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    Freelancer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
