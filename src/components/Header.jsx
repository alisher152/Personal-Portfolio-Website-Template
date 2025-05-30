import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiSass,
  SiTailwindcss,
  SiFigma,
  SiCypress,
  SiStorybook,
  SiGit,
} from "react-icons/si";

const Header = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Skills Section (Desktop) */}
      <div className="mb-12 hidden md:block">
        <h2 className="text-black bg-gray-200 rounded-2xl w-20 pl-5 mb-6 ml-100">
          Skills
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 mt-20">
          <SkillIcon icon={<SiJavascript size={32} />} name="JavaScript" />
          <SkillIcon icon={<SiTypescript size={32} />} name="TypeScript" />
          <SkillIcon icon={<SiReact size={32} />} name="React" />
          <SkillIcon icon={<SiNextdotjs size={32} />} name="Next.js" />
          <SkillIcon icon={<SiNodedotjs size={32} />} name="Node.js" />
          <SkillIcon icon={<SiExpress size={32} />} name="Express" />
          <SkillIcon icon={<SiNestjs size={32} />} name="NestJS" />
          <SkillIcon icon={<SiSocketdotio size={32} />} name="Socket.io" />
          <SkillIcon icon={<SiPostgresql size={32} />} name="PostgreSQL" />
          <SkillIcon icon={<SiMongodb size={32} />} name="MongoDB" />
          <SkillIcon icon={<SiSass size={32} />} name="Sass" />
          <SkillIcon icon={<SiTailwindcss size={32} />} name="Tailwind" />
          <SkillIcon icon={<SiFigma size={32} />} name="Figma" />
          <SkillIcon icon={<SiCypress size={32} />} name="Cypress" />
          <SkillIcon icon={<SiStorybook size={32} />} name="Storybook" />
          <SkillIcon icon={<SiGit size={32} />} name="Git" />
        </div>
      </div>

      {/* Skills Section (Mobile) */}
      <div className="mb-12 md:hidden text-center">
        <h2 className="text-black bg-gray-200 rounded-2xl w-20 pl-5 mb-6 mx-auto">
          Skills
        </h2>
        <div className="grid grid-cols-3 gap-6 mt-20">
          <SkillIcon icon={<SiJavascript size={32} />} name="JavaScript" />
          <SkillIcon icon={<SiTypescript size={32} />} name="TypeScript" />
          <SkillIcon icon={<SiReact size={32} />} name="React" />
          <SkillIcon icon={<SiNextdotjs size={32} />} name="Next.js" />
          <SkillIcon icon={<SiNodedotjs size={32} />} name="Node.js" />
          <SkillIcon icon={<SiExpress size={32} />} name="Express" />
          <SkillIcon icon={<SiNestjs size={32} />} name="NestJS" />
          <SkillIcon icon={<SiSocketdotio size={32} />} name="Socket.io" />
          <SkillIcon icon={<SiPostgresql size={32} />} name="PostgreSQL" />
          <SkillIcon icon={<SiMongodb size={32} />} name="MongoDB" />
          <SkillIcon icon={<SiSass size={32} />} name="Sass" />
          <SkillIcon icon={<SiTailwindcss size={32} />} name="Tailwind" />
          <SkillIcon icon={<SiFigma size={32} />} name="Figma" />
          <SkillIcon icon={<SiCypress size={32} />} name="Cypress" />
          <SkillIcon icon={<SiStorybook size={32} />} name="Storybook" />
          <SkillIcon icon={<SiGit size={32} />} name="Git" />
        </div>
      </div>

      {/* Experience Section (Desktop) */}
      <div className="mt-16 hidden md:block">
        <h2 className="text-black bg-gray-200 rounded-2xl w-32 pl-5 mb-6 ml-100">
          Experience
        </h2>
        <p className="text-gray-600 mb-8 ml-60">
          Here is a quick summary of my most recent experiences:
        </p>
        <div className="space-y-6 ml-60">
          {/* Experience Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex -ml-40">
            <div className="flex-shrink-0 mr-6">
              <h3 className="text-xl font-bold text-green-500 uppercase">
                Upwork
              </h3>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-3">
                <h4 className="text-lg font-semibold text-gray-700 ml-20">
                  Sr. Frontend Developer
                </h4>
                <span className="text-gray-500 text-sm">
                  Nov 2021 - Present
                </span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex ml-20">
                  <span className="mr-2">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
                <li className="flex ml-20">
                  <span className="mr-2">•</span>
                  <span>
                    Ut pretium arcu et massa semper, id fringilla leo semper.
                  </span>
                </li>
                <li className="flex ml-20">
                  <span className="mr-2">•</span>
                  <span>Sed quis justo ac magna.</span>
                </li>
                <li className="flex ml-20">
                  <span className="mr-2">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Experience Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex -ml-40">
            <div className="flex-shrink-0 mr-6">
              <h3 className="text-xl font-bold text-green-500 uppercase">
                Upwork
              </h3>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-3">
                <h4 className="text-lg font-semibold text-gray-700 ml-20">
                  Team Lead
                </h4>
                <span className="text-gray-500 text-sm">
                  Jul 2017 - Oct 2021
                </span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex ml-20">
                  <span className="mr-2">•</span>
                  <span>Sed quis justo ac magna.</span>
                </li>
                <li className="flex ml-20">
                  <span className="mr-2">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
                <li className="flex ml-20">
                  <span className="mr-2">•</span>
                  <span>Sed quis justo ac magna.</span>
                </li>
                <li className="flex ml-20">
                  <span className="mr-2">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Experience Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex -ml-40">
            <div className="flex-shrink-0 mr-6">
              <h3 className="text-xl font-bold text-green-500 uppercase">
                Upwork
              </h3>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-3">
                <h4 className="text-lg font-semibold text-gray-700 ml-20">
                  Full Stack Developer
                </h4>
                <span className="text-gray-500 text-sm">
                  Dec 2015 - May 2017
                </span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex ml-20">
                  <span className="mr-2">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. Lorem ipsum dolor sit amet, <br /> consectetur
                    adipiscing elit.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section (Mobile) */}
      <div className="mt-16 md:hidden text-center">
        <h2 className="text-black bg-gray-200 rounded-2xl w-32 pl-5 mb-6 mx-auto">
          Experience
        </h2>
        <p className="text-gray-600 mb-8">
          Here is a quick summary of my most recent experiences:
        </p>
        <div className="space-y-6">
          {/* Experience Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-green-500 uppercase">
                Upwork
              </h3>
            </div>
            <div className="flex-1">
              <div className="flex flex-col items-center mb-3">
                <h4 className="text-lg font-semibold text-gray-700">
                  Sr. Frontend Developer
                </h4>
                <span className="text-gray-500 text-sm">
                  Nov 2021 - Present
                </span>
              </div>
              <ul className="space-y-2 text-gray-600 text-center">
                <li className="flex justify-center">
                  <span className="mr-2">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
                <li className="flex justify-center">
                  <span className="mr-2">•</span>
                  <span>
                    Ut pretium arcu et massa semper, id fringilla leo semper.
                  </span>
                </li>
                <li className="flex justify-center">
                  <span className="mr-2">•</span>
                  <span>Sed quis justo ac magna.</span>
                </li>
                <li className="flex justify-center">
                  <span className="mr-2">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Experience Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-green-500 uppercase">
                Upwork
              </h3>
            </div>
            <div className="flex-1">
              <div className="flex flex-col items-center mb-3">
                <h4 className="text-lg font-semibold text-gray-700">
                  Team Lead
                </h4>
                <span className="text-gray-500 text-sm">
                  Jul 2017 - Oct 2021
                </span>
              </div>
              <ul className="space-y-2 text-gray-600 text-center">
                <li className="flex justify-center">
                  <span className="mr-2">•</span>
                  <span>Sed quis justo ac magna.</span>
                </li>
                <li className="flex justify-center">
                  <span className="mr-2">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
                <li className="flex justify-center">
                  <span className="mr-2">•</span>
                  <span>Sed quis justo ac magna.</span>
                </li>
                <li className="flex justify-center">
                  <span className="mr-2">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Experience Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-green-500 uppercase">
                Upwork
              </h3>
            </div>
            <div className="flex-1">
              <div className="flex flex-col items-center mb-3">
                <h4 className="text-lg font-semibold text-gray-700">
                  Full Stack Developer
                </h4>
                <span className="text-gray-500 text-sm">
                  Dec 2015 - May 2017
                </span>
              </div>
              <ul className="space-y-2 text-gray-600 text-center">
                <li className="flex justify-center">
                  <span className="mr-2">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// SkillIcon Component
const SkillIcon = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-blue-50 transition-colors">
        {icon}
      </div>
      <span className="mt-2 text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
        {name}
      </span>
    </div>
  );
};

export default Header;
