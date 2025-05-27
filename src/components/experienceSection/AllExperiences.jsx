import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Fullstack Developer",
    company: "Bloom Studio Netherlands",
    date: "2024 - 2025",
    responsibilities: [
      "Part of the full-stack development team of AI-driven web applications using Next.js & NestJS.",
      "Integrated Replicate API, ostris/flux-dev-lora-trainer to process and train AI models for image generation.",
      
      
    ],
  },
  {
    job: "Fullstack Developer",
    company: "Platform Lead Limited",
    date: "2022 - 2024",
    responsibilities: [
      "Developed ventetrack.com, a business inventory management  and POS system using React.js, Django, and PostgreSQL.",
     
      "Implemented real-time data synchronization using WebSockets.",
    ],
  },
  {
    job: "Software Engineer",
    company: "New Horizons",
    date: "2019 - 2021",
    responsibilities: [
      " I was also involved in building Beles, a modern dating mobile application focused on creating meaningful connections through intuitive user experience and matching algorithms. ",
      " I worked on SpeedPay, a fintech mobile application",
    
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
