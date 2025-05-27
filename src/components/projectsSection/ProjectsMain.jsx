import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Magic Makers",
    year: "March 2025",
    align: "right",
    image: "../../public/images/mm.jpg",
    link: "https://app.magicmakers.ai",
  },
  {
    name: "Ventetrack",
    year: "Dec2025",
    align: "left",
    image: "../../public/images/ve.jpg",
    link: "https://test.ventetrack.com/",
  },
  {
    name: "Speedpay",
    year: "Feb2023",
    align: "right",
    image: "../../public/images/sp.jpg",
    link: "https://play.google.com/store/apps/details?id=com.speedpay.app&pcampaignid=web_share",
  },
    {
    name: "HomeRevampExpart",
    year: "Jan2024",
    align: "left",
    image: "../../public/images/hre.jpg",
    link: "https://homerevampexpert.com/",
  },
  {
    name: "Encyl",
    year: "May2023",
    align: "right",
    image: "../../public/images/da.jpg",
    link: "https://encyl.com/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
