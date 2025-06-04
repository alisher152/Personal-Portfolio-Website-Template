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
    <div className="max-w-6xl px-4 py-8 mx-auto dark:bg-black">
      {/* Skills Section */}
      <div className="mb-12">
        {/* Desktop Skills */}
        <div className="hidden md:block">
          <h2 className="w-20 pl-5 mb-6 text-black bg-gray-200 dark:text-white dark:bg-gray-700 rounded-2xl lg:ml-130">
            Skills
          </h2>
          <div className="grid grid-cols-3 gap-6 mt-20 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {skillsData.map((skill) => (
              <SkillIcon key={skill.name} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>

        {/* Mobile Skills */}
        <div className="text-center md:hidden">
          <h2 className="w-20 pl-5 mx-auto mb-6 text-black bg-gray-200 dark:text-white dark:bg-gray-700 rounded-2xl">
            Skills
          </h2>
          <div className="grid grid-cols-3 gap-6 mt-20">
            {skillsData.map((skill) => (
              <SkillIcon key={skill.name} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-16">
        {/* Desktop Experience */}
        <div className="hidden w-full bg-gray-200 md:block dark:bg-gray-900">
          <div className="max-w-6xl px-4 py-8 mx-auto">
            <div className="pt-5">
              <h2 className="w-32 pl-5 mb-6 text-black bg-gray-200 dark:text-white dark:bg-gray-700 rounded-2xl lg:ml-126">
                Experience
              </h2>
              <p className="mb-8 text-gray-600 dark:text-gray-400 lg:ml-100">
                Here is a quick summary of my most recent experiences:
              </p>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Experience */}
        <div className="text-center md:hidden dark:bg-gray-900">
          <div className="px-4 py-8">
            <h2 className="w-32 pl-5 mx-auto mb-6 text-black bg-gray-200 dark:text-white dark:bg-gray-700 rounded-2xl">
              Experience
            </h2>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              Here is a quick summary of my most recent experiences:
            </p>

            <div className="space-y-6">
              {experienceData.map((exp) => (
                <MobileExperienceCard key={exp.id} experience={exp} />
              ))}
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
      <div className="p-3 transition-colors bg-gray-100 rounded-lg dark:bg-gray-700 group-hover:bg-blue-50 dark:group-hover:bg-gray-600">
        {icon}
      </div>
      <span className="mt-2 text-sm text-gray-600 transition-colors dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
        {name}
      </span>
    </div>
  );
};

// ExperienceCard Component (Desktop)
const ExperienceCard = ({ experience }) => {
  return (
    <div className="flex p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex-shrink-0 mr-6">
        <h3 className="text-xl font-bold text-green-500 uppercase">
          {experience.company}
        </h3>
      </div>
      <div className="flex-1">
        <div className="flex items-baseline justify-between mb-3">
          <h4 className="ml-20 text-lg font-semibold text-gray-700 dark:text-gray-300">
            {experience.position}
          </h4>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {experience.period}
          </span>
        </div>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
          {experience.responsibilities.map((item, index) => (
            <li key={index} className="flex ml-20">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// MobileExperienceCard Component
const MobileExperienceCard = ({ experience }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-green-500 uppercase">
          {experience.company}
        </h3>
      </div>
      <div className="flex-1">
        <div className="flex flex-col items-center mb-3">
          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {experience.position}
          </h4>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {experience.period}
          </span>
        </div>
        <ul className="space-y-2 text-center text-gray-600 dark:text-gray-400">
          {experience.responsibilities.map((item, index) => (
            <li key={index} className="flex justify-center">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Data
const skillsData = [
  {
    icon: <SiJavascript size={32} className="dark:text-white" />,
    name: "JavaScript",
  },
  {
    icon: <SiTypescript size={32} className="dark:text-white" />,
    name: "TypeScript",
  },
  { icon: <SiReact size={32} className="dark:text-white" />, name: "React" },
  {
    icon: <SiNextdotjs size={32} className="dark:text-white" />,
    name: "Next.js",
  },
  {
    icon: <SiNodedotjs size={32} className="dark:text-white" />,
    name: "Node.js",
  },
  {
    icon: <SiExpress size={32} className="dark:text-white" />,
    name: "Express",
  },
  { icon: <SiNestjs size={32} className="dark:text-white" />, name: "NestJS" },
  {
    icon: <SiSocketdotio size={32} className="dark:text-white" />,
    name: "Socket.io",
  },
  {
    icon: <SiPostgresql size={32} className="dark:text-white" />,
    name: "PostgreSQL",
  },
  {
    icon: <SiMongodb size={32} className="dark:text-white" />,
    name: "MongoDB",
  },
  { icon: <SiSass size={32} className="dark:text-white" />, name: "Sass" },
  {
    icon: <SiTailwindcss size={32} className="dark:text-white" />,
    name: "Tailwind",
  },
  { icon: <SiFigma size={32} className="dark:text-white" />, name: "Figma" },
  {
    icon: <SiCypress size={32} className="dark:text-white" />,
    name: "Cypress",
  },
  {
    icon: <SiStorybook size={32} className="dark:text-white" />,
    name: "Storybook",
  },
  { icon: <SiGit size={32} className="dark:text-white" />, name: "Git" },
];

const experienceData = [
  {
    id: 1,
    company: "Upwork",
    position: "Sr. Frontend Developer",
    period: "Nov 2021 - Present",
    responsibilities: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 2,
    company: "Upwork",
    position: "Team Lead",
    period: "Jul 2017 - Oct 2021",
    responsibilities: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 3,
    company: "Upwork",
    position: "Full Stack Developer",
    period: "Dec 2015 - May 2017",
    responsibilities: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

export default Header;
