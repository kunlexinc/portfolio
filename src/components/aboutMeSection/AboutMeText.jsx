import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Results-driven Full Stack Engineer with over 6 years of experience in web and mobile application development.
         Skilled in designing, building, and optimizing scalable technology solutions across different industries.
          I am Proficient in modern web and mobile development frameworks, including Next.js, React JS, Node JS, NestJS, React Native, and TypeScript, 
          with expertise in cloud platforms like AWS, Firebase, Supabase, and Oracle Cloud. Strong problem-solving abilities and a 
          deep understanding of backend architecture, API development, and database management. Oracle Autonomous Database Cloud 2019
           Certified,
         with a solid grasp of software development.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
