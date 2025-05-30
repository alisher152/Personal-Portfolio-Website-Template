import { FaEdit } from "react-icons/fa";

const Description = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 mt-20">
      {/* Header Section (Desktop) */}
      <div className="mb-12 hidden sm:block">
        <h2 className="text-black bg-gray-200 rounded-2xl w-20 pl-5 mb-6 ml-100">
          Work
        </h2>
        <p className="text-gray-600 ml-60">
          Some of the noteworthy projects I have built:
        </p>
      </div>

      {/* Header Section (Mobile) */}
      <div className="mb-12 sm:hidden text-center">
        <h2 className="text-black bg-gray-200 rounded-2xl w-20 pl-5 mb-6 mx-auto">
          Work
        </h2>
        <p className="text-gray-600">
          Some of the noteworthy projects I have built:
        </p>
      </div>

      {/* Project 1 (Desktop) */}
      <div className="mb-16 pb-8 border-b border-gray-200 flex items-start hidden sm:flex">
        <img
          src="src/assets/photo 2.png"
          alt="Fiskli Project 1"
          className="w-100 h-80 object-cover mr-6 rounded-lg"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Fiskli</h3>
          <div className="space-y-4 text-gray-600 mb-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Maccenas nec urna ac tellus volutpat viverra. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Next.js
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Typescript
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Nest.js
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              PostgreSQL
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Tailwindcss
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Figma
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Cypress
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Storybook
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Git
            </span>
          </div>
          <button
            className="flex items-center gap-2 px-3 py-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
            onClick={() => console.log("Edit clicked")}
          >
            <FaEdit />
          </button>
        </div>
      </div>

      {/* Project 1 (Mobile) */}
      <div className="mb-16 pb-8 border-b border-gray-200 flex flex-col items-center sm:hidden">
        <img
          src="src/assets/photo 2.png"
          alt="Fiskli Project 1"
          className="w-80 h-80 object-cover mb-6 rounded-lg"
        />
        <div className="flex-1 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 -ml-65">
            Fiskli
          </h3>
          <div className="space-y-4 text-gray-600 mb-6 -ml-25">
            <p>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              <br /> Maccenas nec urna ac tellus <br /> volutpat viverra.
              Vestibulum ante <br /> ipsum primis in faucibus orci luctus <br />{" "}
              et ultrices posuere cubilia curae.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Next.js
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Typescript
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Nest.js
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              PostgreSQL
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Tailwindcss
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Figma
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Cypress
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Storybook
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Git
            </span>
          </div>
          <button
            className="flex items-center gap-2 px-3 py-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors mx-auto"
            onClick={() => console.log("Edit clicked")}
          >
            <FaEdit />
          </button>
        </div>
      </div>

      {/* Project 2 (Desktop) */}
      <div className="mb-16 pb-8 border-b border-gray-200 flex items-start flex-row-reverse hidden sm:flex">
        <img
          src="src/assets/photo 2.png"
          alt="Fiskli Project 2"
          className="w-100 h-40 object-cover ml-6 rounded-lg"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Fiskli</h3>
          <div className="space-y-4 text-gray-600 mb-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Maccenas nec urna ac tellus volutpat viverra. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Next.js
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Typescript
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Nest.js
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              PostgreSQL
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Tailwindcss
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Figma
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Cypress
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Storybook
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Git
            </span>
          </div>
          <button
            className="flex items-center gap-2 px-3 py-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
            onClick={() => console.log("Edit clicked")}
          >
            <FaEdit />
          </button>
        </div>
      </div>

      {/* Project 2 (Mobile) */}
      <div className="mb-16 pb-8 border-b border-gray-200 flex flex-col items-center sm:hidden">
        <img
          src="src/assets/photo 2.png"
          alt="Fiskli Project 2"
          className="w-80 h-80 object-cover mb-6 rounded-lg"
        />
        <div className="flex-1 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 -ml-65">
            Fiskli
          </h3>
          <div className="space-y-4 text-gray-600 mb-6 -ml-25">
            <p>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              <br /> Maccenas nec urna ac tellus <br /> volutpat viverra.
              Vestibulum ante <br /> ipsum primis in faucibus orci luctus <br />{" "}
              et ultrices posuere cubilia curae.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Next.js
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Typescript
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Nest.js
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              PostgreSQL
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Tailwindcss
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Figma
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Cypress
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Storybook
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Git
            </span>
          </div>
          <button
            className="flex items-center gap-2 px-3 py-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors mx-auto"
            onClick={() => console.log("Edit clicked")}
          >
            <FaEdit />
          </button>
        </div>
      </div>

      {/* Project 3 (Desktop) */}
      <div className="mb-8 flex items-start hidden sm:flex">
        <img
          src="src/assets/photo 2.png"
          alt="Fiskli Project 3"
          className="w-100 h-80 object-cover mr-6 rounded-lg"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Fiskli</h3>
          <div className="space-y-4 text-gray-600 mb-6">
            <p>
              Consectetur ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Maccenas nec urna ac tellus volutpat viverra. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Next.js
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Typescript
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Nest.js
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              PostgreSQL
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Tailwindcss
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Figma
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Cypress
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Storybook
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Git
            </span>
          </div>
          <button
            className="flex items-center gap-2 px-3 py-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
            onClick={() => console.log("Edit clicked")}
          >
            <FaEdit />
          </button>
        </div>
      </div>

      {/* Project 3 (Mobile) */}
      <div className="mb-8 flex flex-col items-center sm:hidden">
        <img
          src="src/assets/photo 2.png"
          alt="Fiskli Project 3"
          className="w-80 h-80 object-cover mb-6 rounded-lg"
        />
        <div className="flex-1 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 -ml-65">
            Fiskli
          </h3>
          <div className="space-y-4 text-gray-600 mb-6 -ml-25">
            <p>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              <br /> Maccenas nec urna ac tellus <br /> volutpat viverra.
              Vestibulum ante <br /> ipsum primis in faucibus orci luctus <br />{" "}
              et ultrices posuere cubilia curae.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Next.js
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Typescript
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Nest.js
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              PostgreSQL
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Tailwindcss
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Figma
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Cypress
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Storybook
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Git
            </span>
          </div>
          <button
            className="flex items-center gap-2 px-3 py-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors mx-auto"
            onClick={() => console.log("Edit clicked")}
          >
            <FaEdit />
          </button>
        </div>
      </div>

      {/* Testimonials Section (Desktop) */}
      <div className="mt-32 mb-12 hidden sm:block">
        <h2 className="text-black bg-gray-200 rounded-2xl w-32 pl-5 mb-6 ml-100">
          Testimonials
        </h2>
        <p className="text-gray-600 ml-80">
          Nice things people have said about me:
        </p>
      </div>

      {/* Testimonials Section (Mobile) */}
      <div className="mt-32 mb-12 sm:hidden text-center">
        <h2 className="text-black bg-gray-200 rounded-2xl w-32 pl-5 mb-6 mx-auto">
          Testimonials
        </h2>
        <p className="text-gray-600">Nice things people have said about me:</p>
      </div>

      {/* Testimonials Grid (Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 hidden sm:grid">
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src="src\assets\default-avatar.jpg"
            alt="Profile 1"
            className="w-10 h-10 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600 italic mb-4">
            "Job well done! I am really impressed. He is very very good at what
            he does; I would recommend Sagar and will rehire in the future for
            Frontend development."
          </p>
          <div className="flex items-center">
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">Founder - xyz.com</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src="src\assets\default-avatar.jpg"
            alt="Profile 2"
            className="w-10 h-10 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600 italic mb-4">
            "Great guy, highly recommended for any COMPLEX front-end development
            job! His skills are top-notch and he will be an amazing addition to
            any team."
          </p>
          <div className="flex items-center">
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">Founder - abc.com</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src="src\assets\default-avatar.jpg"
            alt="Profile 3"
            className="w-10 h-10 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600 italic mb-4">
            "Sagar was extremely easy and pleasant to work with and he truly
            cares about the project being a success. Sagar has a high level of
            knowledge and was able to work on my MERN stack application without
            any issues."
          </p>
          <div className="flex items-center">
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">Freelancer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid (Mobile) */}
      <div className="grid grid-cols-1 gap-8 mb-20 sm:hidden">
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src="src\assets\default-avatar.jpg"
            alt="Profile 1"
            className="w-10 h-10 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600 italic mb-4 text-center">
            "Job well done! I am really impressed. He is very very good at what
            he does; I would recommend Sagar and will rehire in the future for
            Frontend development."
          </p>
          <div className="flex justify-center items-center">
            <div>
              <p className="font-semibold text-center">John Doe</p>
              <p className="text-sm text-gray-500 text-center">
                Founder - xyz.com
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src="src\assets\default-avatar.jpg"
            alt="Profile 2"
            className="w-10 h-10 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600 italic mb-4 text-center">
            "Great guy, highly recommended for any COMPLEX front-end development
            job! His skills are top-notch and he will be an amazing addition to
            any team."
          </p>
          <div className="flex justify-center items-center">
            <div>
              <p className="font-semibold text-center">John Doe</p>
              <p className="text-sm text-gray-500 text-center">
                Founder - abc.com
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src="src\assets\default-avatar.jpg"
            alt="Profile 3"
            className="w-10 h-10 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600 italic mb-4 text-center">
            "Sagar was extremely easy and pleasant to work with and he truly
            cares about the project being a success. Sagar has a high level of
            knowledge and was able to work on my MERN stack application without
            any issues."
          </p>
          <div className="flex justify-center items-center">
            <div>
              <p className="font-semibold text-center">John Doe</p>
              <p className="text-sm text-gray-500 text-center">Freelancer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
